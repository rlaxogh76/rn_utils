import React, { useState } from "react";

function FetchTestPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [result, setResult] = useState(null);

  // 입력값 변경 처리
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 폼 제출 처리
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setResult(`✅ 성공: ${data.message}`);
      } else {
        setResult(`❌ 실패: ${data.message}`);
      }
    } catch (error) {
      setResult(`⚠️ 오류 발생: ${error.message}`);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>사용자 등록 테스트</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>사용자명:</label>
          <br />
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>이메일:</label>
          <br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>비밀번호:</label>
          <br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" style={{ marginTop: "10px" }}>
          등록하기
        </button>
      </form>

      {result && (
        <div style={{ marginTop: "20px" }}>
          <strong>{result}</strong>
        </div>
      )}
    </div>
  );
}

export default FetchTestPage;
