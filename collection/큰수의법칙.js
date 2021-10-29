// velmash는 큰 수의 법칙을 본인만의 방식으로 다르게 사용하고 있다.
// velmash의 큰 수의 법칙은 다양한 수로 이루어진 배열이 있을 때 주어진 수들을 M번 더하여 가장 큰수를 만드는 법칙이다.
// 단 배열의 특정한 인덱스(번호)에 해당하는 수가 연속해서 K번을 초과하여 더해질 수 없는 것이 이 법칙의 특징이다.

// 예를 들어 순서대로 2, 4, 5, 4, 6으로 이루어진 배열이 있을 때 M이 8이고, K가 3이라고 가정하자.
// 이 경우 특정한 인덱스의 수가 연속해서 세 번까지만 더해질 수 있으므로 큰 수의 법칙에 따른 결과는 6+6+6+5+6+6+6+5인 46이 된다.

// 배열의 크기 N, 숫자가 더해지는 횟수 M, 그리고 K가 주어질 때 velmash의 큰 수의 법칙에 따른 결과를 출력하시오
// 첫째 줄에 N(2 <= N <= 1,000), M(1 <= M <= 10,000), K(1 <= K <= 10,000)의 자연수가 주어지며, 각 자연수는 공백으로 구분한다.
// 둘째 줄에 N개의 자연수가 주어진다. 각 자연수는 공백으로 구분한다. 단, 각각의 자연수는 1 이상 10,000 이하의 수로 주어진다.
// 입력으로 주어지는 K는 항상 M보다 작거나 같다

function solution(data, m, k) {
  const maxData = data.sort((a, b) => b - a).slice(0, 2);
  const quotient = Math.floor(m / (k + 1));
  const remainder = m % (k + 1);

  const total =
    quotient * (k * maxData[0] + maxData[1]) + maxData[0] * remainder;
  return total;
}

const data = [1, 2, 3, 4, 5, 6];

const solution1 = solution(data, 7, 3);
const solution2 = solution(data, 9, 3);

solution1;
solution2;
