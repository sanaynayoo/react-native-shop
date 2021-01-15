class CartItem {
    constructor(id,quantity,image,productPrice,productTitle,sum){
        this.id = id,
        this.quantity = quantity;
        this.image = image,
        this.productPrice =productPrice;
        this.productTitle = productTitle;
        this.sum = sum;
    }
}

export default CartItem;