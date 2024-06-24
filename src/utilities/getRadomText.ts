export type ContentItemType = {
  title: string;
  text: string;
};

export const getRandomText = (): ContentItemType => {
  const content = [
    {
      title: "Sunrise",
      text: "The sunrise was breathtaking this morning, casting a golden hue over the entire landscape. The colors danced in the sky, creating a stunning view that was hard to forget."
    },
    {
      title: "Journey",
      text: "She embarked on a journey of self-discovery, venturing into unfamiliar territories. Along the way, she encountered challenges that tested her resilience and strength."
    },
    {
      title: "Serenity",
      text: "The lake was a place of perfect serenity, where the gentle ripples of water created a soothing symphony. It was a haven for those seeking peace and tranquility."
    },
    {
      title: "Adventure",
      text: "Their adventure took them to unknown lands, where every turn revealed new wonders. They embraced the thrill of exploration, eager to uncover the secrets of the world."
    },
    {
      title: "Harmony",
      text: "They lived in harmony with nature, respecting the delicate balance of the ecosystem. Their sustainable practices ensured that the environment thrived alongside their community."
    },
    {
      title: "Whisper",
      text: "A whisper of wind rustled the leaves, carrying with it the secrets of the forest. The soft sounds blended with the chirping of birds, creating a natural melody."
    },
    {
      title: "Mystery",
      text: "The old house was filled with mystery, its walls echoing tales of the past. Every creak and shadow seemed to hide a story waiting to be discovered."
    },
    {
      title: "Dream",
      text: "Her dream was to travel the world, experiencing different cultures and landscapes. She yearned for the freedom of the open road and the excitement of new adventures."
    },
    {
      title: "Solitude",
      text: "He enjoyed the solitude of the mountains, where the silence was profound and comforting. It was a place where he could reflect and find inner peace."
    },
    {
      title: "Inspire",
      text: "Her story continues to inspire others, showing that perseverance and courage can overcome any obstacle. She became a beacon of hope for many."
    }
  ];

  const randomIndex = Math.floor(Math.random() * content.length);
  return content[randomIndex];
};
