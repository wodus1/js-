const quotes=[
    {
        quote:"신념은 실제 사실을 만든다.",
        author:"윌리엄 제임스"
    },
    {
        quote:"행동이 늘 행복을 가져다 오진 않는다. 그러나 행동 없이 행복은 없다.",
        author:"윌리엄 제임스"
    },
    {
        quote:"두 사람이 만나면 실제로는 여섯 명이 존재한다. 각각 스스로 보는 두 사람, 상대방이 보는 두 사람, 실제의 두 사람이다.",
        author:"윌리엄 제임스"
    },
    {
        quote:"현실에서 가장 바뀌지 않는 벽은 사람과 사람의 생각 사이에 있다.",
        author:"윌리엄 제임스"
    },
    {
        quote:"청중이 오해한 진실보다 더 나쁜 거짓말은 없다.",
        author:"윌리엄 제임스"
    },
    {
        quote:"우리의 세계관은 우리가 듣기로 결정한 것에 따라 만들어진다.",
        author:"윌리엄 제임스"
    },
    {
        quote:"지혜롭게 되는 묘책은 그동안 간과했던 것을 알아내는 것에 있다.",
        author:"윌리엄 제임스"
    }
];

const quote=document.querySelector("#quote span:first-child");
const author=document.querySelector("#quote span:last-child");
const todayQuote=quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText =todayQuote.quote;
author.innerText =todayQuote.author;