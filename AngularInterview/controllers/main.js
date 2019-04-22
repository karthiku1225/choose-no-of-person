var myApp = angular.module("myApp", []);
myApp.controller("AngularAssignment", ["$scope", AngularAssignment]);
function AngularAssignment($scope) {
    $scope.model = { Room: 1, Adult: 1, Child: 0 };
    $scope.adultChildSum = $scope.model.Adult + $scope.model.Child;
    $scope.roomDec = function () {
        $scope.disableRoomInc = false;
        if ($scope.model.Room == 1) {
            $scope.disableRoomDec = true;
        }
        else {
            $scope.model.Room = $scope.model.Room - 1;
        }
        if ($scope.model.Room == 1) {
            if ($scope.adultChildSum > 4) {
                if ($scope.model.Child > 0) {
                    while ($scope.adultChildSum > 4) {
                        $scope.model.Child--;
                        $scope.adultChildSum = $scope.model.Adult + $scope.model.Child;
                        if ($scope.model.Child == 0)
                            break;
                    }
                }
                while ($scope.adultChildSum > 4) {
                    $scope.model.Adult--;
                    $scope.adultChildSum = $scope.model.Adult + $scope.model.Child;
                }
            }
            $scope.adultChildSum = $scope.model.Adult + $scope.model.Child;
        }
        if ($scope.model.Room == 2) {
            if ($scope.adultChildSum > 8) {
                if ($scope.model.Child > 0) {
                    while ($scope.adultChildSum > 8) {
                        $scope.model.Child--;
                        $scope.adultChildSum = $scope.model.Adult + $scope.model.Child;
                        if ($scope.model.Child == 0)
                            break;
                    }
                }
                while ($scope.adultChildSum > 8) {
                    $scope.model.Adult--;
                    $scope.adultChildSum = $scope.model.Adult + $scope.model.Child;
                }
            }
            $scope.adultChildSum = $scope.model.Adult + $scope.model.Child;
        }
        if ($scope.model.Room == 3) {
            if ($scope.adultChildSum > 12) {
                if ($scope.model.Child > 0) {
                    while ($scope.adultChildSum > 12) {
                        $scope.model.Child--;
                        $scope.adultChildSum = $scope.model.Adult + $scope.model.Child;
                        if ($scope.model.Child == 0)
                            break;
                    }
                }
                while ($scope.adultChildSum > 12) {
                    $scope.model.Adult--;
                    $scope.adultChildSum = $scope.model.Adult + $scope.model.Child;
                }
            }
            $scope.adultChildSum = $scope.model.Adult + $scope.model.Child;
        }
        if ($scope.model.Room == 4) {
            if ($scope.adultChildSum > 16) {
                if ($scope.model.Child > 0) {
                    while ($scope.adultChildSum > 16) {
                        $scope.model.Child--;
                        $scope.adultChildSum = $scope.model.Adult + $scope.model.Child;
                        if ($scope.model.Child == 0)
                            break;
                    }
                }
               // if ($scope.adultChildSum > 16) {
                    while ($scope.adultChildSum > 16) {
                        $scope.model.Adult--;
                        $scope.adultChildSum = $scope.model.Adult + $scope.model.Child;
                    }
              //  }
            }
            $scope.adultChildSum = $scope.model.Adult + $scope.model.Child;
        }
    }
    $scope.roomInc = function () {
       if($scope.model.Room < 5){
        $scope.disableRoomDec = false;
        $scope.model.Room = $scope.model.Room + 1;
        if (($scope.model.Room > 1 && ($scope.adultChildSum == $scope.model.Room-1))) {
            $scope.model.Adult++;
        }
        if ($scope.model.Room == 5) {
            $scope.disableRoomInc = true;
        }
        if ($scope.model.Adult > 1) {
            $scope.disableAdultDec = false;
        }
        if ($scope.model.Child == 0) {
            $scope.disableChildDec = true;
        }
        else {
            $scope.disableChildDec = false;
        }
       }else{
             $scope.disableRoomInc;
            }
    }
    $scope.adultDec = function () {
        $scope.disableRoomInc = false;
        if ($scope.model.Room >= 1) {
            $scope.disableRoomDec = false;
            //if ($scope.model.Adult > 1) {
            //    $scope.model.Adult = $scope.model.Adult - 1;
            //}
        }
        if ($scope.model.Room == 1) {
            $scope.adultChildSum = $scope.model.Adult + $scope.model.Child;
            // }
            if ($scope.adultChildSum > 4) {
                $scope.model.Room--;
            }
            else if ($scope.model.Adult > 1) {
                $scope.model.Adult = $scope.model.Adult - 1;
            }
            else {
                $scope.disableAdultDec = true;
            }
        }
        else if ($scope.model.Room == 2) {
            $scope.adultChildSum = $scope.model.Adult + $scope.model.Child;
            if ($scope.model.Adult == 2 && $scope.adultChildSum == 2) {
                $scope.model.Adult = $scope.model.Adult - 1;
                $scope.model.Room--;
            }
            else if ($scope.model.Child > 2 && $scope.adultChildSum <=2) {
                $scope.model.Adult = $scope.model.Adult - 1;
                $scope.model.Room--;
            }
            else {
                $scope.model.Adult = $scope.model.Adult - 1;
            }
            $scope.adultChildSum = $scope.model.Adult + $scope.model.Child;

        }
        else if ($scope.model.Room == 3) {
            $scope.adultChildSum = $scope.model.Adult + $scope.model.Child;
            if ($scope.model.Adult == 3 && $scope.adultChildSum == 3) {
                $scope.model.Adult = $scope.model.Adult - 1;
                $scope.model.Room--;
            }
            else if ($scope.model.Child >= 1 && $scope.adultChildSum <=3) {
                $scope.model.Adult = $scope.model.Adult - 1;
                $scope.model.Room--;
            }
            else {
                $scope.model.Adult = $scope.model.Adult - 1;
            }
            $scope.adultChildSum = $scope.model.Adult + $scope.model.Child;
        }

        else if ($scope.model.Room == 4) {
            $scope.adultChildSum = $scope.model.Adult + $scope.model.Child;
            if ($scope.model.Adult == 4 && $scope.adultChildSum == 4) {
                $scope.model.Adult = $scope.model.Adult - 1;
                $scope.model.Room--;
            }
            else if ($scope.model.Child >= 1 && $scope.adultChildSum <=4) {
                $scope.model.Adult = $scope.model.Adult - 1;
                $scope.model.Room--;
            }
            else {
                $scope.model.Adult = $scope.model.Adult - 1;
            }
            $scope.adultChildSum = $scope.model.Adult + $scope.model.Child;
        }
        else if ($scope.model.Room == 5) {
            $scope.disableRoomInc = false;
            $scope.adultChildSum = $scope.model.Adult + $scope.model.Child;
            if ($scope.model.Adult == 5 && $scope.adultChildSum == 5) {
                $scope.model.Adult = $scope.model.Adult - 1;
                $scope.model.Room--;
            }
            else if ($scope.model.Child >=1 && $scope.adultChildSum <= 5) {
                $scope.model.Adult = $scope.model.Adult - 1;
                $scope.model.Room--;
            }
            else {
                $scope.model.Adult = $scope.model.Adult - 1;
            }
            $scope.adultChildSum = $scope.model.Adult + $scope.model.Child;
        }
        if ($scope.model.Adult > 1) {
            $scope.disableAdultDec = false;
        } else {
            $scope.disableAdultDec = true;
        }
    }
    $scope.adultInc = function () {
        $scope.disableRoomDec = false;
        $scope.disableAdultDec = false;
        if ($scope.model.Room == 1) {
           // if ($scope.adultChildSum != 4) {
            $scope.model.Adult = $scope.model.Adult + 1;
            $scope.adultChildSum = $scope.model.Adult + $scope.model.Child;
           // }
            if ($scope.adultChildSum > 4) {
                $scope.model.Room++;
            }
        }
        else if ($scope.model.Room == 2) {
            $scope.model.Adult = $scope.model.Adult + 1;
            $scope.adultChildSum = $scope.model.Adult + $scope.model.Child;
            if ($scope.adultChildSum > 8) {
                $scope.model.Room++;
            }
        }
        else if ($scope.model.Room == 3) {
            $scope.model.Adult = $scope.model.Adult + 1;
            $scope.adultChildSum = $scope.model.Adult + $scope.model.Child;
            if ($scope.adultChildSum > 12)
                $scope.model.Room++;
        }
       
        else if ($scope.model.Room == 4) {
            if ($scope.adultChildSum != 20) {
                $scope.model.Adult = $scope.model.Adult + 1;
            }

            $scope.adultChildSum = $scope.model.Adult + $scope.model.Child;
            if ($scope.adultChildSum > 16)
                $scope.model.Room++;
        }
        else if ($scope.model.Room == 5) {
            $scope.disableRoomInc = true;
            if ($scope.adultChildSum != 20)
                $scope.model.Adult = $scope.model.Adult + 1;
        }

        $scope.adultChildSum = $scope.model.Adult + $scope.model.Child;
    }
    $scope.childDec = function () {
        if ($scope.model.Room >= 1) {
            $scope.disableRoomDec = false;
        }

        if ($scope.model.Room == 1) {
            $scope.adultChildSum = $scope.model.Adult + $scope.model.Child;
            if ($scope.adultChildSum > 4) {
                $scope.model.Room--;
            }
            else if ($scope.model.Child > 0) {
                $scope.model.Child = $scope.model.Child - 1;
            }
            else {
                $scope.disableChildDec = true;
            }
        }
        else if ($scope.model.Room == 2) {
            $scope.adultChildSum = $scope.model.Adult + $scope.model.Child;
            if ($scope.model.Child == 2 && $scope.adultChildSum == 2) {
                $scope.model.Child = $scope.model.Child - 1;
                $scope.model.Room--;
            }
            else if ($scope.model.Adult >= 1 && $scope.adultChildSum <= 2) {
                $scope.model.Child = $scope.model.Child - 1;
                $scope.model.Room--;
            }
            else {
                $scope.model.Child = $scope.model.Child - 1;
            }
            $scope.adultChildSum = $scope.model.Adult + $scope.model.Child;

        }
        else if ($scope.model.Room == 3) {
            $scope.adultChildSum = $scope.model.Adult + $scope.model.Child;
            if ($scope.model.Child == 3 && $scope.adultChildSum == 3) {
                $scope.model.Child = $scope.model.Child - 1;
                $scope.model.Room--;
            }
            else if ($scope.model.Adult >= 1 && $scope.adultChildSum <= 3) {
                $scope.model.Child = $scope.model.Child - 1;
                $scope.model.Room--;
            }
            else {
                $scope.model.Child = $scope.model.Child - 1;
            }
            $scope.adultChildSum = $scope.model.Adult + $scope.model.Child;
        }

        else if ($scope.model.Room == 4) {
            $scope.adultChildSum = $scope.model.Adult + $scope.model.Child;
            if ($scope.model.Child == 4 && $scope.adultChildSum == 4) {
                $scope.model.Child = $scope.model.Child - 1;
                $scope.model.Room--;
            }
            else if ($scope.model.Adult >= 1 && $scope.adultChildSum <= 4) {
                $scope.model.Child = $scope.model.Child - 1;
                $scope.model.Room--;
            }
            else {
                $scope.model.Child = $scope.model.Child - 1;
            }
            $scope.adultChildSum = $scope.model.Adult + $scope.model.Child;
        }
        else if ($scope.model.Room == 5) {
            $scope.disableRoomInc = false;
            $scope.adultChildSum = $scope.model.Adult + $scope.model.Child;
            if ($scope.model.Child == 5 && $scope.adultChildSum == 5) {
                $scope.model.Child = $scope.model.Child - 1;
                $scope.model.Room--;
            }
            else if ($scope.model.Adult >=1 && $scope.adultChildSum <= 5) {
                $scope.model.Child = $scope.model.Child - 1;
                $scope.model.Room--;
            }
            else {
                $scope.model.Child = $scope.model.Child - 1;
            }
            $scope.adultChildSum = $scope.model.Adult + $scope.model.Child;
        }
        if ($scope.model.Child > 0) {
            $scope.disableChildDec = false;
        } else {
            $scope.disableChildDec = true;
        }
    }
    $scope.childInc = function () {
        $scope.disableRoomDec = false;
        $scope.disableChildDec = false;
        if ($scope.model.Room == 1) {
            $scope.model.Child = $scope.model.Child + 1;
            $scope.adultChildSum = $scope.model.Adult + $scope.model.Child;
            if ($scope.adultChildSum > 4) {
                $scope.model.Room++;
            }
        }
        else if ($scope.model.Room == 2) {
            $scope.model.Child = $scope.model.Child + 1;
            $scope.adultChildSum = $scope.model.Adult + $scope.model.Child;
            if ($scope.adultChildSum > 8) {
                $scope.model.Room++;
            }
        }
        else if ($scope.model.Room == 3) {
            $scope.model.Child = $scope.model.Child + 1;
            $scope.adultChildSum = $scope.model.Adult + $scope.model.Child;
            if ($scope.adultChildSum > 12)
                $scope.model.Room++;
        }
        else if ($scope.model.Room == 4) {
            $scope.model.Child = $scope.model.Child + 1;
            $scope.adultChildSum = $scope.model.Adult + $scope.model.Child;
            if ($scope.adultChildSum > 16)
                $scope.model.Room++;
        }
        else if ($scope.model.Room == 5) {
            $scope.disableRoomInc = true;
            if ($scope.adultChildSum != 20)
                $scope.model.Child = $scope.model.Child + 1;
        }

        $scope.adultChildSum = $scope.model.Adult + $scope.model.Child;
        if ($scope.model.Adult > 1) {
            $scope.disableAdultDec = false;
        }
        if ($scope.model.Child > 0) {
            $scope.disableChildDec = false;
        }
    }
}
