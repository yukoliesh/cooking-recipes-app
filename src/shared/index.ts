export const getCategoryColor = (categoryName: string) => {
    
  if(categoryName === "Chinese") {
    return "#2F4858"
  } else if (categoryName === "Indian") {
    return "#315771"
  }
  else if (categoryName === "Japanese") {
    return "#33658A"
  }
  else if (categoryName === "Korean") {
    return "#5D90B1"
  }
  else if (categoryName === "Malaysia") {
    return "#86BBD8"
  }
  else if (categoryName === "Singaporean") {
    return "#C3C16C"
  }
  else if (categoryName === "Taiwanese") {
    return "#FFC700"
  }
  else if (categoryName === "Thai") {
    return "#F9960D"
  }
  else if (categoryName === "Vietnamese") {
    return "#F26419"
  }
  else return "#4d4d4d";
}