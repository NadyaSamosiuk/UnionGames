import React, { useContext, useState } from "react";
import { NavLink,  useHistory } from "react-router-dom";
import Context from "./Context";
import FormComponent from "./Form";
import { Modal, Button, message} from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

function Cart () {
    const {cart, setCart} = useContext(Context)
    const [flag, setFlag] = useState(false)
    const { confirm } = Modal;



    function getTotalPrice(){
        let totalPrice = 0
        cart.forEach((item)=>{
            totalPrice +=item.price * item.count
        })
        return totalPrice
    }

   function todoDelete(item){
    
       confirm({
        title: 'Вы действительно хотите удалить товар?',
        icon: <ExclamationCircleOutlined />,
        content: '',
        okText: 'Да',
        okType: 'danger',
        cancelText: 'Нет',
        onOk() {
            const newcart = cart.filter((cart_product)=> cart_product.id !==  item.id  )
            localStorage.setItem('cart', JSON.stringify(newcart))
            setCart(newcart)
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    }

   function placeAnOrder(){
       setFlag(true)
    }

    function confirmTheOrder(){
        const success = () => {
            message.success('Ваш заказ оформлен');
        };
       success()

        const newcart=[]
        localStorage.setItem('cart', JSON.stringify(newcart))
        setCart(newcart)
    }

    const history = useHistory()
    
    function heandlerProductView(item){
        const product = item
        history.push(`product_${product.id}`,{
            product           
        })
    }

   if (cart.length == 0){
       return(
        <div className="cart">
        <div className="container">
            <div className="cart__products">
                <h2 className="cart__title">Корзина</h2>
                <div className="wrapper">
                    <p className="cart__empty">Ваша корзина пуста</p>
                    <NavLink className="cart__link" to='/catalog' >Перейти к покупкам</NavLink>
                </div>
            </div>
        </div>
    </div>    
       )
   }else{
    return(
        <div className="cart">
            <div className="container">
                <div className="cart__products">
                    <h2 className="cart__title">Корзина</h2>
                    <hr className="line__top"/>
                    {cart.map((item, index)=>{
                            return(
                                <div key={index} className="cart__product">
                                    <p className="cart__product__title" onClick={()=>{heandlerProductView(item)}}>{item.title}</p>
                                    <div className="cart__item__img">
                                        <img src={item.picture} alt={item.title}/>
                                    </div>
                                    <p className="cart__item__count">{item.count}</p>
                                    <p className="cart__item__price" >{item.price * item.count}р.</p>
                                    <div className="cart__caption__btn">
                                        <Button className="cart__caption__btn_1" onClick={()=>{todoDelete(item)}} id={item.id}> </Button> 
                                    </div>
                                </div>
                            )
                    })}
                    <hr className="line__bottom"/>
                    <div className="cart_total__price">
                        <h2 className="price">Общая стоимость: {getTotalPrice()} р.</h2> 
                        <button className="place__an__order" onClick={()=>{placeAnOrder()}}>Оформить заказ</button>                        
                    </div>
                    {flag && <div className="cart__products__form">
                        <FormComponent/>
                        <div className="form__btn">
                            <Button  onClick={()=>{confirmTheOrder()}}>Подтвердить заказ</Button>
                        </div>
                    </div>}
                </div>
            </div>
        </div>    
    )
}}

export default Cart