/**
 * Created by Danny on 2015/9/9 16:19.
 */
(function () {
    //�����࣬�������е�ƽ�̱���
    //һ������ཫ�����ʵ���ӡ��������ذ�
    window.Background = Class.extend({
        //��ʼ��
        init: function (params){
            this.image = params.image;
            this.width = params.width;
            this.height = params.height;
            this.speed = params.speed;
            this.y = params.y;
            //���׵�λ��
            this.x = 0;

            //ͼƬ����ͼƬҪ�ܹ�ƽ�̣����Ը�����ǻ����ܿ�ȳ���ͼƬ���
            this.amount = parseInt(game.canvas.width / this.width) + 1;
        },
        pause : function(){
            this.speed = 0;
        },
        update: function () {
            this.x -= this.speed;
            if (this.x <= -this.width * this.amount) {
                this.x = 0;
            }
        },
        //��Ⱦ���������ÿִ֡��
        render: function () {
            //�������ͼƬ������2����ͼƬ����
            for (var i = 0; i < this.amount * 2; i++) {
                game.ctx.drawImage(this.image, 0, 0, this.width, this.height, this.x + this.width * i, this.y, this.width, this.height);
            }
        }
    });
})();