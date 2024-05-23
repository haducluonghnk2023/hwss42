import Table from "react-bootstrap/Table";

export default function Hw10() {
  return (
    <div>
      {" "}
      <Table responsive="sm">
        <thead>
          <tr>
            <th>STT</th>
            <th>Họ và tên</th>
            <th>Giới tính</th>
            <th>Ngày sinh</th>
            <th>Email</th>
            <th>Địa chỉ</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Nguyễn Văn A</td>
            <td>Nam</td>
            <td>01/01/1990</td>
            <td>Nguyenvana@gmail.com</td>
            <td>Hà Nội</td>
            <td colSpan={2}>
              <button style={{ backgroundColor: "yellow", borderRadius: 6 }}>
                Sửa
              </button>
              <button style={{ backgroundColor: "red", borderRadius: 6 }}>
                Xóa
              </button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Trần Thị B</td>
            <td>Nữ</td>
            <td>02/02/1995</td>
            <td>Tranthib@gmail.com</td>
            <td>TP.HCM</td>
            <td colSpan={2}>
              <button style={{ backgroundColor: "yellow", borderRadius: 6 }}>
                Sửa
              </button>
              <button style={{ backgroundColor: "red", borderRadius: 6 }}>
                Xóa
              </button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Phạm Văn C</td>
            <td>Nam</td>
            <td>03/03/1992</td>
            <td>phamvanc@gmail.com</td>
            <td>Đà Nẵng</td>
            <td colSpan={2}>
              <button style={{ backgroundColor: "yellow", borderRadius: 6 }}>
                Sửa
              </button>
              <button style={{ backgroundColor: "red", borderRadius: 6 }}>
                Xóa
              </button>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Lê Thị D</td>
            <td>Nữ</td>
            <td>04/04/1993</td>
            <td>lethid@gmail.com</td>
            <td>Hải Phòng</td>
            <td colSpan={2}>
              <button style={{ backgroundColor: "yellow", borderRadius: 6 }}>
                Sửa
              </button>
              <button style={{ backgroundColor: "red", borderRadius: 6 }}>
                Xóa
              </button>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>Nguyễn Văn E</td>
            <td>Nam</td>
            <td>05/05/1991</td>
            <td>nguyenvane@gmail.com</td>
            <td>Cần Thơ</td>
            <td colSpan={2}>
              <button style={{ backgroundColor: "yellow", borderRadius: 6 }}>
                Sửa
              </button>
              <button style={{ backgroundColor: "red", borderRadius: 6 }}>
                Xóa
              </button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
