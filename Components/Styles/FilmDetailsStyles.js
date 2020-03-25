import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    main_container: {
        // flexDirection: 'row',
        flex: 1,
        // backgroundColor: "#0FFFFF",

    },
    img_container: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
    content_container: {
        flex: 1,
        margin: 5,
        marginTop: 0
    },
    header_container: {
        flex: 0.2,
        alignItems: 'center'
    },
    title_text: {
        fontSize: 30,
        fontWeight: 'bold',
        flex: 1,
        flexWrap: 'wrap',
        // paddingRight: 5,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    vote_text: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#666666'
    },
    description_container: {
        flex: 7,
        // marginTop: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        margin: 10,
    },
    description_text: {
        fontSize: 20,
        color: '#000000',
        textAlign: 'justify',
        backgroundColor: 'rgba(256, 256, 256, 0.8)',
        padding: 10
    },
    info_text: {
        fontSize: 15,
        color: '#000000',
        backgroundColor: 'rgba(256, 256, 256, 0.8)',
    },
    date: {
        margin: 5,
        flex: 1
    },
    date_text: {
        fontSize: 12,
        textAlign: "right"
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    favorite_container: {
        alignItems: 'center'
    },
    favorite_image: {
        width: 40,
        height: 40
    },
    share_button: {
        position: 'absolute',
        width: 60,
        height: 60,
        right: 30,
        bottom: 30,
        borderRadius: 30,
        backgroundColor: '#e91e63',
        justifyContent: 'center',
        alignItems: 'center'
      },
      share_image: {
        width: 30,
        height: 30
      },
      share_touchable_headerrightbutton: {
        marginRight: 8
      }
})

export default styles