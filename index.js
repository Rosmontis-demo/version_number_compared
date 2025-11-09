//比较版本号大小的通用工具函数
function compareVersion(version1, version2) {
    //TODO：待补充代码
    const cut_version1 = version1.split('.')
    const cut_version2 = version2.split('.')

    const st_cut_version1 = Number(cut_version1.at(0))
    const st_cut_version2 = Number(cut_version2.at(0))
    const rd_cut_version1 = Number(cut_version1.at(1))
    const rd_cut_version2 = Number(cut_version2.at(1))
    const th_cut_version1 = Number(cut_version1.at(2))
    const th_cut_version2 = Number(cut_version2.at(2))

    if( cut_version1.length != 3 || cut_version2.length != 3 ){
        return('error');
    }

    if(/[a-aA-Z]/.test(st_cut_version1) === true || /[a-aA-Z]/.test(st_cut_version2) === true || /[a-aA-Z]/.test(rd_cut_version1) === true || 
    /[a-aA-Z]/.test(rd_cut_version2) === true || /[a-aA-Z]/.test(th_cut_version1) === true || /[a-aA-Z]/.test(th_cut_version2) === true){
        return("error");
    }

    if( isNaN(st_cut_version1) || isNaN(st_cut_version2) || 
        isNaN(rd_cut_version1) || isNaN(rd_cut_version2) || 
        isNaN(th_cut_version1) || isNaN(th_cut_version2) ||
        st_cut_version1 < 0 || st_cut_version2 < 0 || 
        rd_cut_version1 < 0 || rd_cut_version2 < 0 || 
        th_cut_version1 < 0 || th_cut_version2 < 0){
        return("error");
    }


    if(st_cut_version1 == st_cut_version2){
        if(rd_cut_version1 == rd_cut_version2){
            if(th_cut_version1 == th_cut_version2){
                return 0;
            } else if(th_cut_version1 < th_cut_version2){
                return -1;
            } else{
                return 1;
            }
        } else if(rd_cut_version1 < rd_cut_version2){
            return -1;
        }else{
            return 1;
        }
    } else if(st_cut_version1 < st_cut_version2){
        return -1;
    } else{
        return 1;
    }


}
