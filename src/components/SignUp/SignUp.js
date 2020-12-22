import CartIcon from "../CartIcon/CartIcon";

export default function SignUp({ name }) {
  return (
    <div>
      <p>{name}</p>
      <CartIcon iconName="user" path="/login/" />
    </div>
  );
}
