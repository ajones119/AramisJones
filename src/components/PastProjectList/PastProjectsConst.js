import LD1 from "../../images/pastProjects/LoneDefender/LD1.png";
import LD2 from "../../images/pastProjects/LoneDefender/LD2.png";
import LD3 from "../../images/pastProjects/LoneDefender/LD3.png";
import Barry1 from "../../images/pastProjects/BarrysNotesOnBarovia/Barrys-1.png";
import Barry2 from "../../images/pastProjects/BarrysNotesOnBarovia/Barrys-2.png";
import Barry3 from "../../images/pastProjects/BarrysNotesOnBarovia/Barrys-3.png";
import Barry4 from "../../images/pastProjects/BarrysNotesOnBarovia/Barrys-4.png";
import Voter1 from "../../images/pastProjects/VoterTool/Voter-tool2.png";
import Voter2 from "../../images/pastProjects/VoterTool/Voter-tool3.png";
import Voter3 from "../../images/pastProjects/VoterTool/Voter-tool4.png";
import Voter4 from "../../images/pastProjects/VoterTool/Voter-tool5.png";



const LoneDefender = {
  pictures: [
    LD1,
    LD2,
    LD3
],
  title: "Lone Defender",
  description:
    "Lone defender was a small game I made in college from Java. In it you could play as one of 3 classes as you held off waves of enemies. It was made from scratch with a Game engine we made in class, and polygons ",
};

const BarrysNotesOnBarovia = {
  pictures: [
    Barry1,
    Barry2,
    Barry3,
    Barry4
],
  title: "Barrys Notes On Barovia",
  description:
    "Barrys Notes on Barovia is a website I made for some of the D&D groups I play in. In it, a DM can make announcements, an NPC with a portrait and a description, or reference several other docs. Players can be added to campaigns and leave notes for themselves (privately) or the rest of their party (public notes).",
};

const VoterTool = {
  pictures: [
    Voter1,
    Voter2,
    Voter3,
    Voter4
],
  title: "Voter Tool",
  description:
    "Here, I used the Google Civic API, Angular, and Microsoft Azure in an Enterprise Programming Class. With it a user can enter an address and find out who their representatives are as well as upcoming elections.",
};

export const PAST_PROJECTS = [BarrysNotesOnBarovia, LoneDefender, VoterTool];
