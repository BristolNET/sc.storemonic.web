interface CartProps {
  storeId: string;
}

const Cart = ({ storeId }: CartProps) => {
  return (
    <div>
      <h2 className="text-xl font-semibold">Cart for {storeId}</h2>
      <p>No items yet.</p>
    </div>
  );
}

export default Cart;
