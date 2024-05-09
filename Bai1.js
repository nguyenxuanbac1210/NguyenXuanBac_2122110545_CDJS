const studentForm = document.getElementById('studentForm');

studentForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const maSV = document.getElementById('maSV').value;
    const hoTen = document.getElementById('hoTen').value;
    const email = document.getElementById('email').value;
    const dienThoai = document.getElementById('dienThoai').value;
    const lop = document.getElementById('lop').value;

    const errors = [];

    if (!validateMaSV(maSV)) {
        errors.push("Mã SV không hợp lệ");
    }

    if (!hoTen.trim()) {
        errors.push("Họ Tên không được để trống");
    }

    if (!validateEmail(email)) {
        errors.push("Email không hợp lệ");
    }

    if (!validateDienThoai(dienThoai)) {
        errors.push("Điện Thoại không hợp lệ");
    }

    if (!validateLop(lop)) {
        errors.push("Lớp không hợp lệ");
    }

    if (errors.length > 0) {
        alert(errors.join('\n'));
    } else {
        // Submit form (ajax, redirect, etc.)
        alert("Dữ liệu đã được submit thành công!");
    }
});

function validateMaSV(maSV) {
    return /^21[0-9]{9}$/.test(maSV);
}

function validateEmail(email) {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}

function validateDienThoai(dienThoai) {
    return /^(0[3|5|7|8|9]{1}[0-9]{8})$/.test(dienThoai);
}

function validateLop(lop) {
    return /^CCQ[A-Za-z0-9]{1,2}$/.test(lop);
}


