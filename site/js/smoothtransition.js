$(document).ready(function(){
                    $("#button").on("click","a", function (event) {
                    //�������� ����������� ��������� ������� �� ������
                    event.preventDefault();
                    //�������� ������������� ���� � �������� href
                    var id  = $(this).attr('href'),
                    //������ ������ �� ������ �������� �� ����� �� ������� ��������� �����
                    top = $(id).offset().top;
                    //��������� ������� �� ���������� - top �� 1500 ��
                    $('body,html').animate({scrollTop: top}, 1000);
                    });
                });