import React from 'react';
import {HeaderButton} from "react-navigation-header-buttons";
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from "../../constant/Colors";

const HeaderNewButton = props => {
    return(
        <HeaderButton
            {...props}
                iconSize={23}
                IconComponent={Icon}
                color={ Colors.primary}

        />
    )
};


export default HeaderNewButton;