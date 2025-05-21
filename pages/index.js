import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = () => {
    if (!question.trim()) return;
    const reply = '📘 بناءً على المادة (36) من الدستور القطري، الحرية الشخصية مكفولة ولا يجوز تقييدها إلا وفق القانون.';
    setResponse(reply);
  };

  return (
    <div className="container">
      <Head>
        <title>MUHAMI AI – محامي الذكاء الاصطناعي</title>
      </Head>

      <main>
        <h1>MUHAMI AI</h1>
        <p className="description">مساعدك القانوني الذكي المعتمد على الدستور القطري</p>

        <textarea
          rows={5}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="اكتب سؤالك القانوني هنا..."
        />
        <button onClick={handleSubmit}>تحليل السؤال</button>

        {response && (
          <div className="result">
            <strong>الإجابة:</strong>
            <p>{response}</p>
          </div>
        )}
      </main>

      <footer>
        <p>© 2025 MUHAMI AI</p>
      </footer>
    </div>
  );
}