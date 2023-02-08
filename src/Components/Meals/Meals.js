import MealsSummary from "./MealsSummary";
import AvailabelMeals from "./AvailabelMeals";
import { Fragment } from "react";
// will then be responsible for rendering that meals list also little summary text
import React from "react";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailabelMeals />
    </Fragment>
  );
};

export default Meals;
