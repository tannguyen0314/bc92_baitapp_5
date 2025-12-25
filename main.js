// Tien Dien
const Elec_1 = 500;
const Elec_2 = 650;
const Elec_3 = 850;
const Elec_4 = 1100;
const Elec_5 = 1300;

function onCalculateElec() {
    const numberKw = document.getElementById("numberKw").value * 1;
    let totalKw = 0;

    if (numberKw < 0) {
        alert("Vui lòng nhập đúng số Kw (phải là số dương)");
        return;
    }

    if (numberKw <= 50) {

        totalKw = numberKw * Elec_1;
    } else if (numberKw <= 100) {

        totalKw = (50 * Elec_1) + (numberKw - 50) * Elec_2;
    } else if (numberKw <= 200) {

        totalKw = (50 * Elec_1) + (50 * Elec_2) + (numberKw - 100) * Elec_3;
    } else if (numberKw <= 350) {

        totalKw = (50 * Elec_1) + (50 * Elec_2) + (100 * Elec_3) + (numberKw - 200) * Elec_4;
    } else {

        totalKw = (50 * Elec_1) + (50 * Elec_2) + (100 * Elec_3) + (150 * Elec_4) + (numberKw - 350) * Elec_5;
    }


    displayTotalPrice(totalKw);
}

function displayTotalPrice(amount) {
    const pInfo_1 = document.getElementById("pInfo_1");
    const nameCus = document.getElementById("nameCus").value;

    if (nameCus === "") {
        pInfo_1.innerHTML = "Họ tên: Khách hàng; Tiền điện: " + amount.toLocaleString() + " VND";
    } else {
        pInfo_1.innerHTML = "Họ tên: " + nameCus + "; Tiền điện: " + amount.toLocaleString() + " VND";
    }
}

// Thue Thu Nhap Ca Nhan

function tienThuePhaiTra() {
   
    const name = document.getElementById("nameCaNhan").value;
    const thuNhap = document.getElementById("totalThuNhap").value * 1;
    const nguoiPhuThuoc = document.getElementById("totalNguoiPhuThuoc").value * 1;

  
    let thuNhapChiuThue = thuNhap - 4000000 - (nguoiPhuThuoc * 1600000);
    let thueTra = 0;

    if (thuNhapChiuThue > 0) {
     
        if (thuNhapChiuThue <= 60000000) thueTra = thuNhapChiuThue * 0.05;
        else if (thuNhapChiuThue <= 120000000) thueTra = thuNhapChiuThue * 0.1;
        else if (thuNhapChiuThue <= 210000000) thueTra = thuNhapChiuThue * 0.15;
        else if (thuNhapChiuThue <= 384000000) thueTra = thuNhapChiuThue * 0.2;
        else if (thuNhapChiuThue <= 624000000) thueTra = thuNhapChiuThue * 0.25;
        else if (thuNhapChiuThue <= 960000000) thueTra = thuNhapChiuThue * 0.3;
        else thueTra = thuNhapChiuThue * 0.35;
    }


    const pInfo_2 = document.getElementById("pInfo_2");
    const hienThiTen = name === "" ? "Khách hàng" : name;
    pInfo_2.innerHTML = `Họ tên: ${hienThiTen}; Thuế TNCN: ${thueTra.toLocaleString()} VND`;
}



// Quan ly sinh vien

function tinhDiemKhuVuc(khuVuc) {
    switch (khuVuc.toUpperCase()) {
        case 'A': return 2;
        case 'B': return 1;
        case 'C': return 0.5;
        default: return 0; 
    }
}


function tinhDiemDoiTuong(doiTuong) {
    switch (doiTuong) {
        case 1: return 2.5;
        case 2: return 1.5;
        case 3: return 1;
        default: return 0; 
    }
}
function ketQua() {
   
    const diemChuan = document.getElementById("diemChuan").value * 1;
    const khuVuc = document.getElementById("khuVuc").value;
    const doiTuong = document.getElementById("doiTuong").value * 1;
    const diemMon_1 = document.getElementById("diemMon_1").value * 1;
    const diemMon_2 = document.getElementById("diemMon_2").value * 1;
    const diemMon_3 = document.getElementById("diemMon_3").value * 1;
    
    let uuTien = tinhDiemKhuVuc(khuVuc) + tinhDiemDoiTuong(doiTuong);
    
    let tongDiem = diemMon_1 + diemMon_2 + diemMon_3 + uuTien;
    let thongBao = "";

    if (diemMon_1 === 0 || diemMon_2 === 0 || diemMon_3 === 0) {
        thongBao = "Bạn đã rớt do có môn bị điểm liệt.";
    } else if (tongDiem >= diemChuan) {
        thongBao = "Bạn đã Đậu. Tổng điểm: " + tongDiem;
    } else {
        thongBao = "Bạn đã Rớt. Tổng điểm: " + tongDiem;
    }
    document.getElementById("pInfo_3").innerHTML = thongBao;
}

// Tinh Tien Cap

function toggleKetNoi() {
    const loaiKhach = document.getElementById("loaiKhachHang").value;
    const inputKetNoi = document.getElementById("soKetNoi");

    if (loaiKhach === "doanhNghiep") {
        inputKetNoi.disabled = false;
        inputKetNoi.style.backgroundColor = "white";
    } else {
        inputKetNoi.disabled = true;
        inputKetNoi.value = "";
        inputKetNoi.style.backgroundColor = "#f0f0f0";
    }
}


function tinhTienCap() {
    const maKH = document.getElementById("maKhachHang").value;
    const loaiKhach = document.getElementById("loaiKhachHang").value;
    const soKenh = document.getElementById("soKenhCaoCap").value * 1;
    const soKetNoi = document.getElementById("soKetNoi").value * 1;

    let tongTien = 0;

    if (loaiKhach === "") {
        alert("Vui lòng chọn loại khách hàng!");
        return;
    }

    if (loaiKhach === "nhaDan") {
        // NHÀ DÂN: 4.5 + 20.5 + 7.5 * số kênh
        tongTien = 4.5 + 20.5 + (7.5 * soKenh);
    } 
    else if (loaiKhach === "doanhNghiep") {
        // DOANH NGHIỆP
        // Phí xử lý: 15$
        // Phí dịch vụ cơ bản: 75$ cho 10 kết nối đầu, mỗi kết nối thêm 5$
        let phiCoBan = 0;
        if (soKetNoi <= 10) {
            phiCoBan = 75;
        } else {
            phiCoBan = 75 + (soKetNoi - 10) * 5;
        }
        
        // Thuê kênh cao cấp: 50$ / kênh
        tongTien = 15 + phiCoBan + (50 * soKenh);
    }

    const display = document.getElementById("ketQuaCap");
    display.innerHTML = "Mã khách hàng: " + maKH + " | Tổng tiền: $" + tongTien.toFixed(2);
}






