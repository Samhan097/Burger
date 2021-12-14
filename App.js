import React from "react";
import CreateBuger from "./Burger/CreateBurger";



const App = () => (
  <div>
    <CreateBuger
    burgerStack={[
      'Luttace',
      'Tomatoos',
      'Tomatoos',
      'Cheese',
      'Luttace',
      'Tomatoos',
      'Cheese'
    ]
    }
    />
  </div>
);

export default App;
