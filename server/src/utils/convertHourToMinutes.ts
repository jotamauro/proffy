export default function convertHourToMinutes(time: string) {
  const [hour, minutes] = time.split(":").map(Number);
  const timeInMinutes = hour * 60 + minutes;
  return timeInMinutes;
}

//Separa a string em um array com duas posições e transforma em numérico.
