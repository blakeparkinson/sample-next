// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const villains = [
    {
      name: 'The Kangaroo',
      image: 'kangaroo.jpg',
      superpower: 'Jumps slightly higher than normal. Tries to steal deadly bacterica. Spiderman stops him.'
    },
    {
      name: 'Flag Smasher',
      image: 'flagsmasher.jpg',
      superpower: 'Hates all nationalities. Wants to abolish all borders. Gets scared off by Deadpool.'
    },
    {
      name: 'Rocket Racer',
      image: 'rocketracer.jpg',
      superpower: 'None. Has a cool skateboard. Crashes into a car, and Spiderman convinces him to become a good guy.'
    },
    {
      name: 'The Fiddler',
      image: 'fiddler.jpg',
      superpower: 'Hypnotizes people with great fiddle skills. Got imprisoned by Flash.'
    },
    {
      name: 'Codpiece',
      image: 'codpiece.jpg',
      superpower: 'Has a gun and other accessories attached to his crotch. Defeated by Coagula.'
    },
    {
      name: 'Armless Tiger Man',
      image: 'armless.jpg',
      superpower: 'Because he has no arms (lost in factory acccident), he strenghtens other parts of his body. Shot by a friend of Black Panther.'
    },
    {
      name: 'Snowflame',
      image: 'snowflame.jpg',
      superpower: 'Cocaine addiction. Defeated by the New Guardians.'
    },
    {
      name: 'Asbestos Lady',
      image: 'asbestos.jpg',
      superpower: 'Resistant to heat and flames. Fought against Human Torch before eventually succumbing to cancer.'
    },
    {
      name: 'Stilt-Man',
      image: 'stilt.jpg',
      superpower: 'Built himself long legs. Got pushed over by Daredevil.'
    },
     {
      name: 'Kite-Man',
      image: 'kite.png',
      superpower: 'Flys around using a kite. Defeated by Batman.'
    }
  ]
  res.status(200).json(villains)
}
