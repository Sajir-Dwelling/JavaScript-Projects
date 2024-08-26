const minNum = 1;
  const maxNum = 100;
  const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

  let attempt = 0;
  let running = true;
  let guess;

  while (running) {
      guess = window.prompt("Type a number between"+" "+ minNum +"-" + maxNum);
      guess = Number(guess);

      if (isNaN(guess)) {
          window.alert("Please enter a valid number");
          
      } else if (guess < minNum || guess > maxNum) {
          window.alert("Please enter a valid number between 1 and 100");
      } else {
          attempt++;
          if (guess < answer) {
              window.alert("Too Low!");
          } else if (guess > answer) {
              window.alert("Too High!");
          } else {
              window.alert("You got it Correct! The answer was"+" "+answer+ " and it took you"+" "+attempt+ " attempts.");
            running = false;
          }
      }
  }