package com.mingyue.service.udp;

/**
 * Created by Tony on 23/7/15.
 */
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;
import com.mingyue.entity.switch01.Switch01Entity;

import com.mingyue.service.UdpServiceI;
import org.apache.log4j.Logger;
import org.jeecgframework.web.system.service.SystemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.SocketException;
import java.util.Map;


public class UdpServerImpl implements UdpServiceI {
    private static final Logger logger = Logger.getLogger(UdpServerImpl.class);
    @Autowired
    private SystemService systemService;

    static final int INPORT = 12010;
    private byte[] buf = new byte[2048];
    private DatagramPacket dp = new DatagramPacket(buf, buf.length);
    private DatagramSocket socket;

    public UdpServerImpl() {
        try {
            socket = new DatagramSocket(INPORT);// 创建一接收消息的对象，而不是每次接收消息都创建一个
            System.out.println("Server started");
            while (true) {
                socket.receive(dp);
                //接收到客户端的消息
                String rstr=Dgram.toString(dp);

                try {
                    Map<String, Object> map = JSON.parseObject(rstr, new TypeReference<Map<String, Object>>() {});
                    String id=(String)map.get("distinct");
                    Switch01Entity switch01Entity=systemService.findUniqueByProperty(Switch01Entity.class,"id",id);
                    if(switch01Entity!=null){

                        if(true==map.get("value")){
                            switch01Entity.setState(1);
                        }else{
                            switch01Entity.setState(0);
                        }
                        systemService.saveOrUpdate(switch01Entity);
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                }


                String rcvd = rstr + ",from address:"
                        + dp.getAddress() + ",port:" + dp.getPort();
                System.out.println("From Client:"+rcvd);

//                String echoString = rcvd;
//                DatagramPacket echo = Dgram.toDatagram(echoString,
//                        dp.getAddress(), dp.getPort());
//                //将数据包发送给客户端
//                socket.send(echo);
            }
        } catch (SocketException e) {
            System.err.println("Can't open socket");
            System.exit(1);
        } catch (IOException e) {
            System.err.println("Communication error");
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        new UdpServerImpl();
    }
}
