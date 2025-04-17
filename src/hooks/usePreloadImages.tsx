import { useEffect, useState } from "react";

export type ImageConfig = Record<string, string>;

export type UsePreloadedImagesResult = {
  images: Record<string, HTMLImageElement> | null;
  isLoading: boolean;
};

export function usePreloadedImages(
  config: ImageConfig,
): UsePreloadedImagesResult {
  const [images, setImages] = useState<Record<string, HTMLImageElement> | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const preload = async () => {
      const entries = await Promise.all(
        Object.entries(config).map(([key, src]) => {
          return new Promise<[string, HTMLImageElement]>((resolve) => {
            const img = new Image();
            img.onload = () => resolve([key, img]);
            img.src = src;
          });
        }),
      );

      if (isMounted) {
        setImages(Object.fromEntries(entries));
        setIsLoading(false);
      }
    };

    preload();

    return () => {
      isMounted = false;
    };
  }, [JSON.stringify(config)]);

  return { images, isLoading };
}
