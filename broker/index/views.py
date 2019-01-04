from django.shortcuts import render


import binascii
from hashlib import sha256


m_shop = "707806542"
m_orderid = "12345"
m_amount = "150.00"
m_curr = "USD"
description = "Test payment"
m_desc = binascii.b2a_base64(description.encode('utf8'))[:-1]
m_key = "123"
list_of_value_for_sign = map(str, [m_shop, m_orderid, m_amount, m_curr, m_desc, m_key])
result_string = ":".join(list_of_value_for_sign)
sign_hash = sha256(result_string)
m_sign = sign_hash.hexdigest().upper()



contexto = {"m_shop": m_shop,
            "m_orderid": m_orderid,
            "m_amount": m_amount,
            "m_curr": m_curr,
            "description": description,
            "m_desc": m_desc,
            "m_key": m_key,
            "m_sign": m_sign
            }

# ------------->> DASHBOARD <<-------------
def index(request):
    return render(request, 'index/index.html', contexto)


# ------------->> PAYEER <<-------------
def payeer(request):
    return render(request, 'index/payeer_707806542.txt', contexto)


# ------------->>  SUCCESS <<-------------
def success(request):
    return render(request, 'index/success.html', contexto)


# ------------->> FAIL <<-------------
def fail(request):
    return render(request, 'index/fail.html', contexto)


# ------------->> STATUS <<-------------
def status(request):
    return render(request, 'index/status.html', contexto)
