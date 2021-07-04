let sinal = 'vermelho';

switch(sinal){
    case 'verde':
        console.log('Pode passar');
        break;
    case 'amarelo':
        console.log('Aguarde');
        break;
    case 'vermelho':
        console.log('sinal fechado, pare');
        break;
    default:
        console.log('sinal invalido')
}