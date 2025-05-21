import { useState } from 'react';

export default function Home() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = () => {
    if (!question.trim()) return;
    // نموذج رد ذكي افتراضي
    const reply = 'بناءً على المادة (36) من الدستور القطري، الحرية الشخصية مكفولة ولا يجوز تقييدها إلا وفق القانون.';
    setResponse(reply);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '600px', margin: 'auto' }}>
      <h1 style={{ color: '#0B2D4A' }}>MUHAMI AI – مساعدك القانوني</h1>
      <p>اكتب سؤالك القانوني وسنقوم بتحليله والرد وفقًا للدستور القطري:</p>
      <textarea
        rows={4}
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        style={{ width: '100%', padding: '0.5rem', marginTop: '1rem' }}
        placeholder="مثال: هل يمكن فصلي من العمل بدون إنذار؟"
      />
      <button
        onClick={handleSubmit}
        style={{ backgroundColor: '#0B2D4A', color: 'white', padding: '0.5rem 1rem', marginTop: '1rem' }}
      >
        تحليل السؤال
      </button>

      {response && (
        <div style={{ marginTop: '2rem', backgroundColor: '#F1F5F9', padding: '1rem', borderRadius: '5px' }}>
          <strong>الإجابة:</strong>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}