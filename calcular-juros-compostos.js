const capital = 1000.01
const taxa = 12.5
const periodoTempo = 5
const montante = (capital * (Math.pow((1 + (taxa / 100)), periodoTempo))).toFixed(0)

console.log(`
Se um capital de R$ ${capital} é aplicado durante ${periodoTempo} 
meses no sistema de juros compostos sob uma taxa mensal 
fixa de ${taxa}%, qual será o valor do montante?

sendo o montante ${montante}
`);