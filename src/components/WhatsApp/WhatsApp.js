import "./WhatsApp.scss";

export default function WhatsApp() {
  return (
    <>
      <a
        target="_blank"
        href="https://api.whatsapp.com/send?phone=&text=3516367968"
        className="whatsapp-button">
        <i className="fab fa-whatsapp"></i>
      </a>
    </>
  );
}
