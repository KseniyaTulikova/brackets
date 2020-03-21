module.exports = function check(str, bracketsConfig) {
  let currentStr = str;
    let lengthOfStr = 0; //should be if result is true

        const removePairOfBrackets = () => {
            lengthOfStr = currentStr.length;
            bracketsConfig.forEach(pair => {
                currentStr = currentStr.replace(pair.join(''), '');
            });

            return (lengthOfStr !== currentStr.length) ? removePairOfBrackets() : (currentStr.length == 0);
        }

        return removePairOfBrackets();
  }


