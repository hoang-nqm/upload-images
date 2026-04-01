import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import UploadForm from './UploadForm';
import AdminDashboard from './AdminDashboard';
import { Layout } from 'antd';

const { Header, Content } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Layout style={{ minHeight: '100vh', background: '#f0f2f5' }}>
        <Header style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          background: '#001529',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
        }}>
          <Link to="/" style={{ color: 'white', fontSize: '20px', fontWeight: 'bold', letterSpacing: '1px' }}>
            HỆ THỐNG CẬP NHẬT THÔNG TIN FACEID
          </Link>
          {/* Link Admin đã được xóa khỏi đây */}
        </Header>
        
        <Content>
          <Routes>
            <Route path="/" element={<UploadForm />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </Content>
      </Layout>
    </BrowserRouter>
  );
}

export default App;