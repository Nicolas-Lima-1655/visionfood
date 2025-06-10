import { speak } from '../../libs/speech.js';

/* --- Carrinho --- */
export function getCart(){
  return JSON.parse(localStorage.getItem('cart')||'[]');
}
export function saveCart(c){
  localStorage.setItem('cart',JSON.stringify(c));
}
export function addToCart(item){
  const cart = getCart();
  const idx  = cart.findIndex(i=>i.item===item._id);
  if(idx>-1) cart[idx].quantity++;
  else cart.push({ item:item._id, quantity:1, note:'' });
  saveCart(cart);
  speak(`Adicionado ${item.name}`);
}
export function renderCart(){
  const cart = getCart();
  const box  = document.getElementById('cart-items');
  if(!box) return;
  box.innerHTML='';
  let total=0;
  cart.forEach(ci=>{
    const line=document.createElement('div');
    line.innerText=`${ci.item} – qtd ${ci.quantity}`;
    box.append(line);
    // total fictício aqui (para demo)
  });
  document.getElementById('total').innerText=`Total (demo)`;
}
