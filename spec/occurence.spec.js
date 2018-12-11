const assert = require('assert');
const occurence = require('../helpers/occurence');

describe('test occurence', () => {
  it('avec "bonjour bonjour"', () => {
    assert.deepStrictEqual(
      occurence('bonjour bonjour'),
      {
        bonjour: 2,
      },
    );
  });

  it('test avec "La terre était grise, le blé était gris, le ciel était gris (Giono)"', () => {
    assert.deepStrictEqual(
      occurence('La terre était grise, le blé était gris, le ciel était gris (Giono)'),
      {
        terre: 1, était: 3, grise: 1, blé: 1, gris: 2, ciel: 1, giono: 1,
      },
    );
  });

  it('test avec "- ça va Harry ? demanda Hagrid. Tu ne dis rien. Harry ne savait pas très bien comment s\'expliquer. Il avait eu le plus bel anniversaire de sa vie, et pourtant... - Tout le monde pense que je suis quelqu\'un d\'exceptionnel, dit-il enfin en mâchonnant sa viande caoutchouteuse. Tous ces gens au Chaudron Baveur, le professeur Quirrell, Mr Ollivander... Mais moi, je sais bien que ne connais rien à la magie. Comment peuvent-ils croire que j\'ai un bel avenir ? Je suis célèbre, mais je ne me rappelle pas pourquoi. Je n\'ai aucune idée de ce qui s\'est produit quand Vol... pardon... je veux dire le soir où mes parents sont morts. - Ne t\'inquiète pas, Harry, répondit Hagrid avec un sourire bienveillant, tu apprendras très vite. A Poudlard, tout le monde commence au même niveau. Tu t\'en sortiras très bien. Reste toi-même, c\'est tout. Je sais que c\'est difficile. Tu as été choisi et c\'est toujours difficile. Mais tu seras très content à Poudlard. Moi aussi, j\'étais content... Et je le suis toujours..."', () => {
    assert.deepStrictEqual(
      occurence('- ça va Harry ? demanda Hagrid. Tu ne dis rien. Harry ne savait pas très bien comment s\'expliquer. Il avait eu le plus bel anniversaire de sa vie, et pourtant... - Tout le monde pense que je suis quelqu\'un d\'exceptionnel, dit-il enfin en mâchonnant sa viande caoutchouteuse. Tous ces gens au Chaudron Baveur, le professeur Quirrell, Mr Ollivander... Mais moi, je sais bien que ne connais rien à la magie. Comment peuvent-ils croire que j\'ai un bel avenir ? Je suis célèbre, mais je ne me rappelle pas pourquoi. Je n\'ai aucune idée de ce qui s\'est produit quand Vol... pardon... je veux dire le soir où mes parents sont morts. - Ne t\'inquiète pas, Harry, répondit Hagrid avec un sourire bienveillant, tu apprendras très vite. A Poudlard, tout le monde commence au même niveau. Tu t\'en sortiras très bien. Reste toi-même, c\'est tout. Je sais que c\'est difficile. Tu as été choisi et c\'est toujours difficile. Mais tu seras très content à Poudlard. Moi aussi, j\'étais content... Et je le suis toujours...'),
      {
        harry: 3, demanda: 1, hagrid: 2, dis: 1, rien: 2, savait: 1, pas: 3, très: 4, bien: 3, comment: 2, expliquer: 1, avait: 1, plus: 1, bel: 2, anniversaire: 1, vie: 1, pourtant: 1, tout: 3, monde: 2, pense: 1, que: 4, suis: 3, quelqu: 1, exceptionnel: 1, 'dit-il': 1, enfin: 1, mâchonnant: 1, viande: 1, caoutchouteuse: 1, tous: 1, ces: 1, gens: 1, chaudron: 1, baveur: 1, professeur: 1, quirrell: 1, ollivander: 1, mais: 3, moi: 2, sais: 2, connais: 1, magie: 1, 'peuvent-ils': 1, croire: 1, avenir: 1, célèbre: 1, rappelle: 1, pourquoi: 1, aucune: 1, idée: 1, qui: 1, est: 4, produit: 1, quand: 1, vol: 1, pardon: 1, veux: 1, dire: 1, soir: 1, mes: 1, parents: 1, sont: 1, morts: 1, inquiète: 1, répondit: 1, avec: 1, sourire: 1, bienveillant: 1, apprendras: 1, vite: 1, poudlard: 2, commence: 1, même: 1, niveau: 1, sortiras: 1, reste: 1, 'toi-même': 1, difficile: 2, été: 1, choisi: 1, toujours: 2, seras: 1, content: 2, aussi: 1, étais: 1,
      },
    );
  });
});
