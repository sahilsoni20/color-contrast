export type ContentItemType = {
    title: string,
    text: string
}

export const getRandomText = (): ContentItemType => {
    const content =[
        {
            title: 'Sunrise',
            text: 'The sunrise was breathtaking this morning.'
        },
        {
            title: 'Journey',
            text: 'She embarked on a journey of self-discovery.'
        },
        {
            title: 'Serenity',
            text: 'The lake was a place of perfect serenity.'
        },
        {
            title: 'Adventure',
            text: 'Their adventure took them to unknown lands.'
        },
        {
            title: 'Harmony',
            text: 'They lived in harmony with nature.'
        },
        {
            title: 'Whisper',
            text: 'A whisper of wind rustled the leaves.'
        },
        {
            title: 'Mystery',
            text: 'The old house was filled with mystery.'
        },
        {
            title: 'Dream',
            text: 'Her dream was to travel the world.'
        },
        {
            title: 'Solitude',
            text: 'He enjoyed the solitude of the mountains.'
        },
        {
            title: 'Inspire',
            text: 'Her story continues to inspire others.'
        }
    ];
    
}