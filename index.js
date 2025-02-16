// Create a command line interface that lets the user specify a file path and the nodejs process counts the number of words inside it.
const fs = require("fs");
const { Command } = require("commander");
const program = new Command();

program
  .name("word-counter")
  .description("CLI to count the number of words inside the given file path")
  .version("1.00.00");

program
  .command("count")
  .description("Count the number of words in a file")
  .argument("<file>", "file path")
  .action((filePath) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const wordsCount = data.trim().split(/\s+/).length;
        console.log(`You have ${wordsCount} words in this file`);
      }
    });
  });

program.parse();
