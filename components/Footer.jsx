const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closedHour = 22;

  const isOpen = hour >= openHour && hour <= closedHour;

  return (
    <footer className="footer">
      <div className="order">
        {isOpen ? (
          <p>We`re open until {closedHour}. Come visit us or order online!</p>
        ) : (
          <p>Sorry, we`re closed.</p>
        )}

        <button className="btn">Order</button>
      </div>
    </footer>
  );
};

export default Footer;
