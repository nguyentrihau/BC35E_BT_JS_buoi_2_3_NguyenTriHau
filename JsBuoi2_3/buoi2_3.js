/**
 * Tinh luong nhan vien
 * - Dau vao
 * + So_ngay_lam = 10
 * + Luong_ngay = 100
 * - Xu ly
 * Tong_luong = So_ngay_lam * Luong_ngay
 * 
 * - Dau ra
 * => Tong_luong = ?
 * 
 */
var btnTinhLuong = document.getElementById("btnTinhLuong");
btnTinhLuong.onclick = function(){
    //Dau vao
    var soNgayLam = document.getElementById("soNgayLam").value*1;
    const TIENLUONG = document.getElementById("tienLuong").value*1;
    //Xu ly
    var tongLuong= soNgayLam * TIENLUONG;
    //format VN
    var currentFormat = new Intl.NumberFormat("VN-vn");
    var ketQua = "Tổng lương là: "+currentFormat.format(tongLuong)+" VND";
    // Dau ra
    document.getElementById("showInfoTongLuong").innerHTML = ketQua;
};


/**
 * Tinh gia tri trung binh cua 5 so thuc:
 * - Dau vao:
 * - Nhap 5 so thuc:
 * + num1 =  nguoi dung nhap
 * + num2 =  nguoi dung nhap
 * + num3 =  nguoi dung nhap
 * + num4 =  nguoi dung nhap
 * + num5 =  nguoi dung nhap
 * 
 * - Xu ly
 * + Gia_tri_trung_binh = (num1 + num2 + num3 + num4 + num5) / 5
 * 
 * - Dau ra:
 * => Gia_tri_trung_binh = ?
 */
var btnTrungBinhTong = document.getElementById("btnTrungBinhTong");
btnTrungBinhTong.onclick = function(){
    // Dau vao
    var num1 = document.getElementById("num1").value*1;
    var num2 = document.getElementById("num2").value*1;
    var num3 = document.getElementById("num3").value*1;
    var num4 = document.getElementById("num4").value*1;
    var num5 = document.getElementById("num5").value*1;
    // Xu ly
    var TrungBinhTong = (num1 + num2 + num3 + num4 + num5)/5
    // console.log(TrungBinhTong);
    var ketQua = "Giá trị trung bình tổng 5 số là: " + TrungBinhTong;
    // Dau ra
    document.getElementById("showInfoTrungBinh").innerHTML = ketQua;
};

/**
 * Quy doi tien:
 * - Dau vao:
 * + USD = 23.500 (VND)
 * + Nguoi_dung_nhap = ? (USD)
 * 
 * - Xu ly:
 * + So_tien_doi_ra = Nguoi_dung_nhap*USD 
 * 
 * - Dau ra:
 * => Tien sau quy doi = ? VND
 * 
 */
var btnQuyDoiTien = document.getElementById("btnQuyDoiTien");
btnQuyDoiTien.onclick = function(){
    // Dau vao
    const USA = document.getElementById("dola").value*1;
    var mnUSA = document.getElementById("mnUSA").value*1;
    // Xu ly
    var VND = USA * mnUSA;
    //Format VN 
    var currentFormat = new Intl.NumberFormat("VN-vn");
    var ketQua = "Tiền sau quy đổi: "+ currentFormat.format(VND) + " VND";
    // Dau ra
    document.getElementById("showInfoQuyDoi").innerHTML = ketQua;

};

/**
 * Tinh dien tich, Chu vi hinh chu nhat
 * - Dau vao:
 * + Chieu_dai = nguoi dung nhap
 * + Chieu_rong = nguoi dung nhap
 * 
 * - Xu ly:
 * + Dien_tich = Chieu_dai * Chieu_rong
 * + Chu_Vi = (Chieu_dai + Chieu_rong) * 2
 * 
 * - Dau ra: 
 * Dien_tich = ?
 * Chu_vi = ?
 */
var btnHCN = document.getElementById("btnHCN");
btnHCN.onclick = function(){
    // Dau vao
    var chieudai = document.getElementById("chieudai").value*1;
    var chieurong = document.getElementById("chieurong").value*1;
    //Xu ly
    var CV = (chieudai + chieurong)*2;
    var DT = chieudai * chieurong;

    var ketQua = "<p>Chu vi HCN là: "+ CV + "</p>";
        ketQua += "<p>Diện tích HCN là: " + DT + "</p>";
    console.log(ketQua);
    // Dau ra
    document.getElementById("showInfoTinhHCN").innerHTML = ketQua;
};

/**
 * Tinh tong 2 ky so:
 * - Dau vao:
 * kyso = nguoi dung nhap
 * 
 * - Xu ly:
 * lay so_hang_dv :  so_hang_dv = kyso % 10;
 * lay so_hang_chuc :  so_hang_chuc = Math.floor(kyso / 10);
 * Tong_hai_kyso = so_hang_dv + so_hang_chuc;
 * 
 * - Dau ra:
 * Tong_hai_kyso = ?
 */
var btnTongKySo = document.getElementById("btnTongKySo");
btnTongKySo.onclick = function(){
    // Dau vao
    var kySo = document.getElementById("kySo").value*1;
    // Xu ly
    var hangDv = kySo % 10;
    var hangChuc = Math.floor(kySo/10);
    var tongHaiKySo = hangDv + hangChuc;
    var ketQua = "tổng 2 ký số là: "+ tongHaiKySo;
    // Dau ra
    document.getElementById("showInfoKySo").innerHTML = ketQua;

}