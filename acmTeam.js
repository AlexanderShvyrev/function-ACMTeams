/*There are a number of people who will be attending ACM-ICPC World Finals. Each of them may be well versed in a number of topics. Given a list of topics known by each attendee, you must determine the maximum number of topics a 2-person team can know. Also find out how many ways a team can be formed to know that many topics. Lists will be in the form of bit strings, where each string represents an attendee and each position in that string represents a field of knowledge, 1 if its a known field or 0 if not.*/

function acmTeam(topic) {
    let count = 1
    let max = 0
    let newArr = []
    for (let i = 0; i < topic.length - 1; i++) {
        for (let j = i + 1; j < topic.length; j++) {
            let temp = 0
            for (let k = 0; k < topic[i].length; k++) {
                if (topic[i][k] == '1' || topic[j][k] == '1') {
                    temp++
                }
                if (temp > max) {
                    max = temp
                    count = 1
                } else if (temp == max) {
                    count++
                }
            }
        }
    }
    newArr.push(max)
    newArr.push(count)
    return newArr
}