import React, { Component } from "react";

class FormComponent extends Component {  
    
    constructor(props) {  
        super(props);
        this.state = {  
            name: "", 
            email: "", 
            phone:"",
            delivery: "",  
            city: "Минск",
            street:"",
            entrance:"",
            floor:"",
            apartment:"",
            massage:"" 
        };  
        this.onChangeHandler = this.onChangeHandler.bind(this);  
    } 
    
    onChangeHandler(e) { 
        localStorage.setItem('order', JSON.stringify(this.state)) 
        this.setState({  
            [e.target.name]: e.target.value 
        });   
    } 
    
    render() {  
    return (  
      <div className="form">  
        <h3 className="form__title">Личные данные</h3>  
        <hr/>  
        <form className="form__data">  
            <label>Имя Фамилия: </label>  
            <input  className="form__data__name" type="text" name="name" placeholder="Иванов Иван" onChange={this.onChangeHandler}/> 
            <label>E-mail:</label>  
            <input className="form__data__mail" type="text" name="email" placeholder="ivan.ivanov@mail.com" onChange={this.onChangeHandler}/>
            <label>Телефон:</label>  
            <input className="form__data__phone" pattern="[+]375[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}" required type="tel" name="phone" placeholder="+375(29)222-22-22" onChange={this.onChangeHandler}/> 
            <h3 className="form__title">Доставка</h3>
            <hr/>
            <label>Способ доставки:</label>  
            <label><input className="form__data__delivery" type="radio" name="delivery" value="5" checked={this.state.delivery === "5"} onChange={this.onChangeHandler}/> 
                курьером до клиента
            </label> 
            <label><input className="form__data__delivery"  type="radio"  name="delivery" value="0" checked={this.state.delivery === "0"} onChange={this.onChangeHandler}/>
                самовывоз в Минске (пр. Независимости, 58 пав.204)
            </label> 
            <br/> 
            <label>Адрес доставки:</label>  
            <label className="form__data_city">Город: </label>  
            <select className="form__data__select" name="city" value={this.state.state}  onChange={this.onChangeHandler}>  
                <option value="Minsk">Минск</option>  
                <option value="Vitebsk">Витебск</option>  
                <option value="Grodno">Гродно</option>  
                <option value="Gomel">Гомель</option> 
                <option value="Mogilev">Могилев</option>
                <option value="Brest">Брест</option> 
            </select> 

            <input className="form__data__street" type="text" name="street" placeholder="Улица, дом" onChange={this.onChangeHandler}/>
            <div className="form__data__apartment">
                <input  className="form__data__entrance" type="text" name="entrance" placeholder="Подъезд" onChange={this.onChangeHandler}/>
                <input className="form__data__floor" type="text" name="floor" placeholder="Этаж" onChange={this.onChangeHandler}/>
                <input  className="form__data__apartment" type="text" name="apartment" placeholder="Квартира" onChange={this.onChangeHandler}/> 
            </div>
            <textarea className="form__data__massage" name="massage" placeholder="Комментарий к заказу" onChange={this.onChangeHandler}></textarea>
        </form>   
      </div>  
    );  
  }  
}  
  
export default FormComponent;  