const mc = Client.getMinecraft();

const rightClickMethod = Client.getMinecraft().class.getDeclaredMethod("func_147121_ag");
rightClickMethod.setAccessible(true);

export class Keys {
    static W = new KeyBind(mc.field_71474_y.field_74351_w);
    static S = new KeyBind(mc.field_71474_y.field_74368_y);
    static A = new KeyBind(mc.field_71474_y.field_74370_x);
    static D = new KeyBind(mc.field_71474_y.field_74366_z);
    static SPACE = new KeyBind(mc.field_71474_y.field_74314_A);
    static SHIFT = new KeyBind(mc.field_71474_y.field_74311_E);
    static CTRL = new KeyBind(mc.field_71474_y.field_151444_V);
    static LMB = new KeyBind(mc.field_71474_y.field_74312_F);
    static RMB = new KeyBind(mc.field_71474_y.field_74313_G);

    static forwardBind = new KeyBind(mc.field_71474_y.field_74351_w);
    static backwardBind = new KeyBind(mc.field_71474_y.field_74368_y);
    static leftBind = new KeyBind(mc.field_71474_y.field_74370_x);
    static rightBind = new KeyBind(mc.field_71474_y.field_74366_z);
    static jumpBind = new KeyBind(mc.field_71474_y.field_74314_A);
    static sneakBind = new KeyBind(mc.field_71474_y.field_74311_E);
    static sprintBind = new KeyBind(mc.field_71474_y.field_151444_V);
    static attackBind = new KeyBind(mc.field_71474_y.field_74312_F);
    static useBind = new KeyBind(mc.field_71474_y.field_74313_G);
}

export class KeyLib {
    static getState(key) {
        return Keyboard.isKeyDown(key.getKeyCode());
    }

    static rightClick() {
        rightClickMethod.invoke(Client.getMinecraft());
    }
}
