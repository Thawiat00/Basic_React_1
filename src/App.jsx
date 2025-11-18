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

// 📦 บทที่ 4.1: useState พื้นฐาน
function Counter() {
  // useState(0) = ค่าเริ่มต้นคือ 0
  // count = ค่าปัจจุบัน
  // setCount = function สำหรับเปลี่ยนค่า
  const [count, setCount] = useState(0);

  return (
    <StyledCard title="🔢 Counter (useState พื้นฐาน)">
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px', margin: '20px 0', color: '#2196F3' }}>
          {count}
        </h1>
        
        <div>
          <button 
            onClick={() => setCount(count - 1)}
            style={{
              padding: '10px 20px',
              margin: '5px',
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '18px'
            }}
          >
            -
          </button>
          
          <button 
            onClick={() => setCount(0)}
            style={{
              padding: '10px 20px',
              margin: '5px',
              backgroundColor: '#9E9E9E',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Reset
          </button>
          
          <button 
            onClick={() => setCount(count + 1)}
            style={{
              padding: '10px 20px',
              margin: '5px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '18px'
            }}
          >
            +
          </button>
        </div>

        <p style={{ marginTop: '15px', color: '#666', fontSize: '14px' }}>
          💡 แต่ละปุ่มเรียก setCount() เพื่อเปลี่ยนค่า
        </p>
      </div>
    </StyledCard>
  );
}

// 📦 บทที่ 4.2: useState กับ Object
function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'เรียน React', completed: true },
    { id: 2, text: 'สร้าง Component', completed: true },
    { id: 3, text: 'ทำโปรเจคจริง', completed: false }
  ]);

  // Function สำหรับสลับสถานะ completed
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id 
        ? { ...todo, completed: !todo.completed }  // spread operator
        : todo
    ));
  };

  return (
    <StyledCard title="✅ Todo List (useState กับ Array)">
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map(todo => (
          <li 
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            style={{
              padding: '10px',
              marginBottom: '8px',
              backgroundColor: 'white',
              borderRadius: '5px',
              cursor: 'pointer',
              textDecoration: todo.completed ? 'line-through' : 'none',
              opacity: todo.completed ? 0.6 : 1,
              border: '1px solid #ddd'
            }}
          >
            {todo.completed ? '✅' : '⬜'} {todo.text}
          </li>
        ))}
      </ul>
      <p style={{ fontSize: '12px', color: '#666', textAlign: 'center' }}>
        💡 คลิกที่รายการเพื่อเปลี่ยนสถานะ
      </p>
    </StyledCard>
  );
}

// 📦 บทที่ 4.3: State แยกกัน (แต่ละ Component มี State ของตัวเอง)
function IndependentCounters() {
  // Component ปุ่มที่มี state ของตัวเอง
  function IndependentButton({ label, color }) {
    const [count, setCount] = useState(0);

    return (
      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: '10px 20px',
          margin: '5px',
          backgroundColor: color,
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        {label}: {count}
      </button>
    );
  }

  return (
    <StyledCard title="🔀 State แยกกัน (Independent State)">
      <div style={{ textAlign: 'center' }}>
        <p style={{ marginBottom: '10px' }}>
          แต่ละปุ่มมี state ของตัวเอง (นับแยกกัน)
        </p>
        <IndependentButton label="ปุ่ม A" color="#FF5722" />
        <IndependentButton label="ปุ่ม B" color="#3F51B5" />
        <IndependentButton label="ปุ่ม C" color="#9C27B0" />
      </div>
    </StyledCard>
  );
}

// 📦 บทที่ 4.4: Sharing State (ยก State ขึ้นไปที่ Component แม่)
function SharedCounter() {
  // State อยู่ที่ Component แม่
  const [sharedCount, setSharedCount] = useState(0);

  // Component ลูก - รับ props จากแม่
  const CounterButton = ({ label, color }) => (
    <button
      onClick={() => setSharedCount(sharedCount + 1)}
      style={{
        padding: '10px 20px',
        margin: '5px',
        backgroundColor: color,
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
    >
      {label}: {sharedCount}
    </button>
  );

  return (
    <StyledCard title="🔗 Shared State (แชร์ State)">
      <div style={{ textAlign: 'center' }}>
        <p style={{ marginBottom: '10px' }}>
          ทั้ง 3 ปุ่มใช้ state เดียวกัน (นับพร้อมกัน)
        </p>
        <CounterButton label="ปุ่ม A" color="#FF5722" />
        <CounterButton label="ปุ่ม B" color="#3F51B5" />
        <CounterButton label="ปุ่ม C" color="#9C27B0" />
        
        <div style={{ marginTop: '15px' }}>
          <button
            onClick={() => setSharedCount(0)}
            style={{
              padding: '8px 16px',
              backgroundColor: '#9E9E9E',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Reset ทั้งหมด
          </button>
        </div>
      </div>
    </StyledCard>
  );
}

// 🎯 Component หลัก
export default function App() {
  return (
    <div style={{ 
      maxWidth: '900px', 
      margin: '0 auto', 
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ textAlign: 'center' }}>📚 บทที่ 4: useState และ Sharing State</h1>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '15px'
      }}>
        <Counter />
        <TodoList />
        <IndependentCounters />
        <SharedCounter />
      </div>

      <StyledCard title="🎓 สรุป">
        <ul>
          <li><strong>useState:</strong> Hook สำหรับเก็บข้อมูลที่เปลี่ยนแปลงได้</li>
          <li><strong>Syntax:</strong> <code>const [value, setValue] = useState(initialValue)</code></li>
          <li><strong>Independent State:</strong> แต่ละ Component มี state ของตัวเอง</li>
          <li><strong>Shared State:</strong> ยก state ขึ้นไปที่ parent แล้วส่งผ่าน props</li>
          <li><strong>Spread Operator:</strong> <code>{'{'} ...object {'}'}</code> สำหรับ copy object/array</li>
          <li><strong>Array Methods:</strong> .map(), .filter() ใช้ร่วมกับ setState</li>
        </ul>

        <div style={{
          marginTop: '20px',
          padding: '15px',
          backgroundColor: '#fff3e0',
          borderRadius: '8px'
        }}>
          <h4>💡 เมื่อไหร่ควรใช้ Shared State?</h4>
          <p><strong>ใช้ Shared State เมื่อ:</strong></p>
          <ul>
            <li>หลาย Component ต้องการข้อมูลเดียวกัน</li>
            <li>ต้องการให้ข้อมูลอัพเดทพร้อมกัน</li>
            <li>ต้องการควบคุม state จากจุดเดียว</li>
          </ul>
          <p><strong>ใช้ Independent State เมื่อ:</strong></p>
          <ul>
            <li>แต่ละ Component ทำงานแยกกัน</li>
            <li>ไม่ต้องการแชร์ข้อมูล</li>
          </ul>
        </div>
      </StyledCard>
    </div>
  );
}