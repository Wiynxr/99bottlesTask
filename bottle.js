function generateSingleStanza(number) {
    if (number >= 11 && number <= 19) {
      return `${number} бутылок пива на стене, ${number} бутылок пива! Возьми одну, пусти по кругу, ${
        number - 1
      } бутылок пива на стене`;
    } else if (number % 10 === 1) {
      return `${number} бутылка пива на стене, ${number} бутылка пива! Возьми одну, пусти по кругу, ${
        number - 1
      } бутылка пива на стене`;
    } else if (number % 10 === 2 || number % 10 === 3 || number % 10 === 4) {
      return `${number} бутылки пива на стене, ${number} бутылки пива! Возьми одну, пусти по кругу, ${
        number - 1
      } бутылки пива на столе`;
    } else {
      return `${number} бутылок пива на стене, ${number} бутылок пива! Возьми одну, пусти по кругу, ${
        number - 1
      } бутылок пива на стене`;
    }
  }
  generateSongText();
  function generateSongText() {
    for (let i = 99; i > 0; i--) {
      console.log(generateSingleStanza(i));
    }
  }
  