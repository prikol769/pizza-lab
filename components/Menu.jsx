import Pizza from "./Pizza";

function Menu(props) {
  // console.log(typeof props)
  // console.log(props.pizzaData)
  const numPizzas = props.pizzaData.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {/* ternary example */}

      {numPizzas > 0 ? (
        <ul className="pizzas">
          {props.pizzaData.map((pizza, i) => (
            <Pizza key={i} {...pizza} />
          ))}
        </ul>
      ) : (
        <p>We're still working on our menu. Please come back later!</p>
      )}

      {/* <Pizza
        name='Focaccia'
        ingredient='Bread with italian olive oil and rosemary'
        photoName='pizzas/focaccia.jpg'
        price={6}
      />

       <Pizza
        name='Pizza Spinaci'
        ingredient='Tomato, mozarella, spinach, and ricotta cheese'
        photoName='pizzas/spinaci.jpg'
        price={12}
      />

      <Pizza
        name='Pizza Spinaci'
        ingredient='Tomato, mozarella, spinach, and ricotta cheese'
        photoName='pizzas/spinaci.jpg'
        price={12}
      />  */}
    </main>
  );
}

export default Menu;
