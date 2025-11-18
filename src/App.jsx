// 📦 Component สำหรับ Card (นำมาใช้ซ้ำจากบทที่ 1)
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

// 📦 บทที่ 2.1: แสดงข้อมูลจาก Object
function UserProfile() {
  // ข้อมูลผู้ใช้ในรูปแบบ Object
  const user = {
    name: 'สมชาย ใจดี',
    age: 25,
    hobbies: ['อ่านหนังสือ', 'เขียนโค้ด', 'ฟังเพลง']
  };

  return (
    <StyledCard title="👤 โปรไฟล์ผู้ใช้">
      {/* แสดงข้อมูลแบบธรรมดา */}
      <p><strong>ชื่อ:</strong> {user.name}</p>
      <p><strong>อายุ:</strong> {user.age} ปี</p>
      
      {/* แสดงข้อมูลแบบ List */}
      <p><strong>งานอดิเรก:</strong></p>
      <ul>
        {user.hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </StyledCard>
  );
}

// 📦 บทที่ 2.2: แสดง Array ของ Objects
function ProductList() {
  const products = [
    { id: 1, name: '📱 iPhone 15', price: 35000, inStock: true },
    { id: 2, name: '💻 MacBook Pro', price: 65000, inStock: true },
    { id: 3, name: '⌚ Apple Watch', price: 15000, inStock: false },
    { id: 4, name: '🎧 AirPods Pro', price: 8900, inStock: true }
  ];

  return (
    <StyledCard title="🛍️ รายการสินค้า">
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#e8f5e9' }}>
            <th style={{ padding: '10px', textAlign: 'left' }}>สินค้า</th>
            <th style={{ padding: '10px', textAlign: 'right' }}>ราคา</th>
            <th style={{ padding: '10px', textAlign: 'center' }}>สถานะ</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '10px' }}>{product.name}</td>
              <td style={{ padding: '10px', textAlign: 'right' }}>
                ฿{product.price.toLocaleString()}
              </td>
              <td style={{ padding: '10px', textAlign: 'center' }}>
                {product.inStock ? '✅ มีสินค้า' : '❌ หมด'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </StyledCard>
  );
}

// 📦 บทที่ 2.3: Filter และ Map
function StudentGrades() {
  const students = [
    { id: 1, name: 'อานนท์', score: 85 },
    { id: 2, name: 'บุญมี', score: 45 },
    { id: 3, name: 'ชนิดา', score: 92 },
    { id: 4, name: 'ดาวใจ', score: 55 },
    { id: 5, name: 'เอกชัย', score: 78 }
  ];

  // กรองเฉพาะคนที่สอบผ่าน (>= 50)
  const passedStudents = students.filter(student => student.score >= 50);
  
  // กรองเฉพาะคนที่สอบไม่ผ่าน (< 50)
  const failedStudents = students.filter(student => student.score < 50);

  return (
    <StyledCard title="📊 ผลการสอบ">
      <div style={{ marginBottom: '15px' }}>
        <h4 style={{ color: '#4CAF50' }}>✅ สอบผ่าน ({passedStudents.length} คน)</h4>
        <ul>
          {passedStudents.map(student => (
            <li key={student.id}>
              {student.name}: <strong>{student.score}</strong> คะแนน
              {student.score >= 80 && ' 🌟'}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 style={{ color: '#f44336' }}>❌ สอบไม่ผ่าน ({failedStudents.length} คน)</h4>
        <ul>
          {failedStudents.map(student => (
            <li key={student.id}>
              {student.name}: <strong>{student.score}</strong> คะแนน
            </li>
          ))}
        </ul>
      </div>
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
      <h1 style={{ textAlign: 'center' }}>📚 บทที่ 2: แสดงข้อมูลและ Lists</h1>
      
      <UserProfile />
      <ProductList />
      <StudentGrades />

      <StyledCard title="🎓 สรุป">
        <ul>
          <li>ใช้ <code>{'{}'}</code> เพื่อแทรกค่า JavaScript ใน JSX</li>
          <li>ใช้ <code>.map()</code> เพื่อแปลง array เป็น JSX elements</li>
          <li>ใช้ <code>.filter()</code> เพื่อกรองข้อมูล</li>
          <li>ต้องใส่ <code>key</code> ที่ unique ในทุก list item</li>
          <li>สามารถใช้เงื่อนไข <code>{'{'}condition && &lt;Element /&gt;{'}'}</code></li>
        </ul>
      </StyledCard>
    </div>
  );
}