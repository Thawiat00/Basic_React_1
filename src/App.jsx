import { useState } from 'react';

// 📦 Component สำหรับ Card
function StyledCard({ title, children }) {
  return (
    <div style={{
      border: '2px solid #4CAF50',
      borderRadius: '8px',
      padding: '15px',
      marginBottom: '15px',
      backgroundColor: '#f1f8f4'
    }}>
      <h3 style={{ color: '#2e7d32' }}>{title}</h3>
      {children}
    </div>
  );
}

// 📦 บทที่ 3.1: Conditional Rendering แบบ Ternary
function StatusBadge() {
  const [isOnline, setIsOnline] = useState(true);

  return (
    <StyledCard title="🔄 Conditional Rendering (? :)">
      <div style={{ textAlign: 'center' }}>
        {/* แสดงตามเงื่อนไข: ถ้าจริงแสดงอันแรก ถ้าเท็จแสดงอันที่สอง */}
        <div style={{
          display: 'inline-block',
          padding: '10px 20px',
          borderRadius: '20px',
          backgroundColor: isOnline ? '#4CAF50' : '#f44336',
          color: 'white',
          marginBottom: '10px'
        }}>
          {isOnline ? '🟢 ออนไลน์' : '🔴 ออฟไลน์'}
        </div>
        <br />
        
        {/* Event: onClick */}
        <button 
          onClick={() => setIsOnline(!isOnline)}
          style={{
            padding: '8px 16px',
            backgroundColor: '#2196F3',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          เปลี่ยนสถานะ
        </button>
      </div>
    </StyledCard>
  );
}

// 📦 บทที่ 3.2: Conditional Rendering แบบ &&
function Notification() {
  const [hasMessage, setHasMessage] = useState(true);
  const [messageCount, setMessageCount] = useState(5);

  return (
    <StyledCard title="📬 Notification System (&&)">
      <div style={{ textAlign: 'center' }}>
        {/* แสดงเฉพาะเมื่อมีข้อความ */}
        {hasMessage && (
          <div style={{
            padding: '15px',
            backgroundColor: '#fff3cd',
            borderRadius: '5px',
            marginBottom: '10px'
          }}>
            📩 คุณมีข้อความใหม่ {messageCount} ข้อความ
          </div>
        )}

        {/* แสดงเฉพาะเมื่อไม่มีข้อความ */}
        {!hasMessage && (
          <p style={{ color: '#999' }}>ไม่มีข้อความใหม่</p>
        )}

        <button 
          onClick={() => setHasMessage(!hasMessage)}
          style={{
            padding: '10px 20px',
            backgroundColor: '#FF9800',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginRight: '5px'
          }}
        >
          {hasMessage ? 'ลบข้อความ' : 'เพิ่มข้อความ'}
        </button>

        {hasMessage && (
          <button 
            onClick={() => setMessageCount(messageCount + 1)}
            style={{
              padding: '10px 20px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            เพิ่มจำนวน +1
          </button>
        )}
      </div>
    </StyledCard>
  );
}

// 📦 บทที่ 3.3: Multiple Events
function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username && password) {
      setIsLoggedIn(true);
    } else {
      alert('กรุณากรอกข้อมูลให้ครบ!');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  return (
    <StyledCard title="🔐 Login Form">
      {!isLoggedIn ? (
        // แสดงฟอร์ม Login
        <div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>
              Username:
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="กรอก username"
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '5px',
                border: '1px solid #ddd'
              }}
            />
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>
              Password:
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="กรอก password"
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '5px',
                border: '1px solid #ddd'
              }}
            />
          </div>

          <button 
            onClick={handleLogin}
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Login
          </button>
        </div>
      ) : (
        // แสดงหน้า Dashboard
        <div style={{ textAlign: 'center' }}>
          <div style={{
            padding: '20px',
            backgroundColor: '#e8f5e9',
            borderRadius: '10px',
            marginBottom: '15px'
          }}>
            <h3>👋 ยินดีต้อนรับ, {username}!</h3>
            <p>คุณเข้าสู่ระบบสำเร็จแล้ว</p>
          </div>

          <button 
            onClick={handleLogout}
            style={{
              padding: '10px 30px',
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Logout
          </button>
        </div>
      )}
    </StyledCard>
  );
}

// 🎯 Component หลัก
export default function App() {
  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ textAlign: 'center' }}>📚 บทที่ 3: Conditional Rendering และ Events</h1>
      
      <StatusBadge />
      <Notification />
      <LoginForm />

      <StyledCard title="🎓 สรุป">
        <ul>
          <li><strong>Ternary (? :):</strong> <code>{'{'}condition ? &lt;A /&gt; : &lt;B /&gt;{'}'}</code></li>
          <li><strong>Logical AND (&&):</strong> <code>{'{'}condition && &lt;A /&gt;{'}'}</code></li>
          <li><strong>Events:</strong> onClick, onChange, onSubmit เป็นต้น</li>
          <li><strong>Arrow Function:</strong> <code>onClick={'{'}() =&gt; doSomething(){'}'}</code></li>
          <li><strong>Event Object:</strong> <code>onChange={'{'}(e) =&gt; setValue(e.target.value){'}'}</code></li>
        </ul>
      </StyledCard>
    </div>
  );
}