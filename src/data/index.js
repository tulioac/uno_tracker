import fotos from '../components/fotos';

function createPlayer(name, wins, picture) {
  return {
    name,
    wins,
    cards: [],
    picture
  }
}

const dumbo = createPlayer("Dumbo", 39, fotos.dumbo);
const sara = createPlayer("Sara", 37, fotos.sara);
const tulio = createPlayer("Túlio", 36, fotos.tulio);
const andre = createPlayer("André", 22, fotos.andre);
const daniel = createPlayer("Daniel", 21, fotos.daniel);
const malu = createPlayer("Malu", 4, fotos.malu);
const henrique = createPlayer("Henrique", 2, fotos.henrique);
const cartaxo = createPlayer("Cartaxo", 0, fotos.cartaxo);


const players = [dumbo, sara, tulio, andre, daniel, malu, henrique, cartaxo];

export default players;