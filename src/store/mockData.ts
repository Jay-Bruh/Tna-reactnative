import { ConservationStatus } from "./types";
import LocalizedStrings from 'react-native-localization';

const funFacts = [
  'Place',
  'Holder',
  'Fun',
  'Facts',
  'Lorem',
  'Ipsum',
  'Dolor',
  'Sit',
  'Amet'
]

const fishes = [
  {
    name: 'AZURE DAMSEL',
    imageSrc: require('../resource/images/AzureDamsel.png'),
    scientificName: 'Chrysiptera Hemicyanea',
    diet: 'Omnivore',
    maxSize: '7cm',
    funFacts: [
      'The Males are in charge of taking care of the eggs, guarding them, and aerating them.  The population can double in 15 months.',
      'Although native to the eastern Indian Ocean and Western Pacific, it has been recently found in the central .*Mediterranean around Sicily and Malta. This specie inhabits in Coral Reefs, and depend on their structures for protection from predators.'
    ],
    conservationStatus: ConservationStatus.ne,
  },
  {
    name: 'TREADFIN CARDINALFISH',
    imageSrc: require('../resource/images/TreadfinCardinalfish.png'),
    scientificName: 'Zoramia leptacantha',
    diet: 'Omnivore',
    maxSize: '6cm',
    funFacts: [
      'The Threadfin Cardinalfish is very small and transparent-like in color, nocturnal, and very shy. It often hides among branching corals.',
      'Males carry the fertilized eggs in the mouth until these are ready to hatch.'
    ],
    conservationStatus: ConservationStatus.ne,
  },
  {
    name: 'TRIGGERFISH',
    imageSrc: require('../resource/images/ClownTriggerfish.png'),
    scientificName: 'Balistidae',
    diet: 'Carnivores',
    maxSize: '20-100cm',
    funFacts:[
      'This group of fish receives that name because of the ""trigger"" mechanism used to extend the dorsal fins and lock themselves into crevices.',
      'Triggerfishes have powerful jaws that allow them to crack even the thickest shells.',
      'Triggerfish can rotate each of its eyeballs independently.'
    ],
    conservationStatus: ConservationStatus.ne,
  },
  {
    name: 'PUFFERFISH',
    imageSrc: require('../resource/images/DogFacePuffer.png'),
    scientificName: 'Arothron',
    diet: 'Carnivores',
    maxSize: '10-120cm',
    funFacts:[
      'Pufferfish can transform and enlarge the body in a split of a second. Scientists believe this is a self-defense tactic.',
      'There are more than 120 species of Pufferfishes in the world, and the majority are marine fish, with only 30 species living in freshwater.',
      'Pufferfish vary in size from 2 cm long (Pygmy Puffer) up to 60 cm long (Giant Puffer).',
      'Pufferfishes are slow swimmers; an aftermatch counterattack is a toxin in their bodies that kills the creatures that ingest them. This Tetrodotoxin can be 1,200 times more potent than cyanide, and a single fish contains enough to kill 30 adult men.',
      "Sharks are the only species immune to the Pufferfish's toxin."
    ],
    conservationStatus: ConservationStatus.ne,
  },
  {
    name: 'ANGELFISH',
    imageSrc: require('../resource/images/BicolourAngelfish.png'),
    scientificName: 'Pomacanthidae',
    maxSize: '15-60cm',
    funFacts:[
      'There are 86 species of Marine Angelfish, that should not be confused with the freshwater angelfish, which inhabit the Amazon River basin.',
      'Emperor Angelfish changes color; the differences between juveniles and adults are so broad that it was thought to be two different species for a long time. As adults, both sex change color during mating season.',
      'Angelfish are omnivorous, but their favorite food is sponges and alae.'
    ],
    conservationStatus: ConservationStatus.lc,
  },
  {
    name: 'SWEETLIPS',
    imageSrc: require('../resource/images/HarlequinSweetlips.png'),
    scientificName: 'Plectorhinchus spp',
    diet: 'Omnivores',
    maxSize: '40-75cm',
    funFacts:[
      'Sweetlip fish receive the name after their fleshy lips; some individuals have been seen doing a ""kiss-like"" behavior, which is yet a mystery whether this a friendy or aggressive behavior.',
      'These fish in parts of the world are also named ""Grunts"", this as direct reference piglike grunt produced with their throat teeth and amplified by their air bladders.',
      'Sweetlips reproduction is by the spawning of eggs into the open ocean. High mortality is offset by releasing a large number of eggs.',
      'Sweetlips have everchanging patterns.',
      'The juvenile Harlequin Sweetlips mimics the behavior of poisonous flatworms to deter potential predators.'
    ],
    conservationStatus: ConservationStatus.ne,
  },
  {
    name: 'UNICORNFISH',
    imageSrc: require('../resource/images/HumpnoseUnicorn.png'),
    scientificName: 'Naso spp',
    diet: 'Omnivores',
    maxSize: '30-100cm',
    funFacts:[
      'These Unicornfish receives the name for its hornlike extension on the forehead, it is developed fully on adult fishes. This horn forces them to change diet preferences from algae to plankton.',
      'Juveniles play a crucial role by eating fast-growing algae that negatively impact the health of coral reefs.',
      'Unicornfishes are vulnerable to changes in the environment and the loss of Coral Reefs in the Indo-Pacific.',
      'They defend from predators using modified scales located at the base of their tail, these are sharp and can inflict deep puncture wounds.',
       ],
    conservationStatus: ConservationStatus.lc,
  },
  {
    name: 'SURGEONFISH AND TANGS',
    imageSrc: require('../resource/images/BrownTang.png'),
    scientificName: 'Acanthuridae',
    diet: 'Herbivores',
    maxSize: '15-100cm',
    funFacts:[
      'Surgeonfishes and Tangs are part of the family Acathuridae; this family also involves the Unicornfishes.',
      'The physical characteristic that identifies them is the sharp spine(s) at the base of the tail that they use to protect themselves from aggressors.',
      'These fish are active herbivores that aggressively defend their favorite patches of algae.',
    ],
    conservationStatus: ConservationStatus.lc,
  },
]

export { funFacts, fishes };