package com.mingyue.websocket;

/**
 * Created by Tony on 13/7/15.
 */

import java.io.IOException;
import java.nio.ByteBuffer;
import java.nio.CharBuffer;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import org.apache.catalina.websocket.MessageInbound;
import org.apache.catalina.websocket.StreamInbound;
import org.apache.catalina.websocket.WebSocketServlet;
import org.apache.catalina.websocket.WsOutbound;
import org.apache.log4j.Logger;

public class DemoServlet extends WebSocketServlet {//{//
    /**
     * Logger for this class
     */
    private static final Logger logger = Logger.getLogger(DemoServlet.class);
    private static final long serialVersionUID = -4853540828121130946L;
    private static List<MyMessageInbound> mmiList = new ArrayList();

    private boolean isopen = false;

    public boolean isIsopen() {
        return isopen;
    }

    public org.apache.catalina.websocket.StreamInbound createWebSocketInbound(java.lang.String s) {
        return null;
    }

    public void send(Object obj) {
        if (isIsopen()) {
            try {
                for (MyMessageInbound mmib : mmiList) {

                    mmib.myoutbound.writeTextMessage(CharBuffer.wrap(JSON.toJSONString(obj)));
                    mmib.myoutbound.flush();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    protected StreamInbound createWebSocketInbound(String str, HttpServletRequest request) {
        return new MyMessageInbound();
    }

    private class MyMessageInbound extends MessageInbound {
        WsOutbound myoutbound;

        public int getReadTimeout() {
            return 0;
        }

        @Override
        public void onOpen(WsOutbound outbound) {
            try {
                logger.info("Open Client.");
                this.myoutbound = outbound;
                mmiList.add(this);
                outbound.writeTextMessage(CharBuffer.wrap("Hello!"));
                isopen = true;
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        @Override
        public void onClose(int status) {
            System.out.println("Close Client.");
            mmiList.remove(this);
        }

        @Override
        public void onTextMessage(CharBuffer cb) throws IOException {
            logger.info("Accept Message : " + cb);

            CharBuffer buffer = CharBuffer.wrap(cb);
            String gh = buffer.toString();
            Object obj = JSON.parse(gh);
            send(obj);
        }

        @Override
        public void onBinaryMessage(ByteBuffer bb) throws IOException {
        }


    }

}