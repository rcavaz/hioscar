#! bash

declare image_name='hioscar'
declare image_tag='test'
declare container_name='hioscar'

# This script is written using a functional programming approach to maximize readability.
function main() {
    case $1 in
        build)
            build_image;;
        run)
            run_image;;
        tmp)
            run_tmp_image;;
        debug)
            run_last_saved_container;;
        clean)
            clean;;
        *)
            help;;
    esac
}

function build_image() {
    docker build -t $image_name:$image_tag .
}

function _build_image_if_missing() {
    [[ $(docker image ls $image_name:$image_tag|wc -l) == 1 ]] && build_image
}

function run_image() {
    _build_image_if_missing

    local test_reports='playwright-report'
    local test_results='test-results'
    docker run --name $container_name $image_name:$image_tag
    docker cp $container_name:/app/$test_reports .
    docker cp $container_name:/app/$test_results .
    docker commit $container_name hioscar/debug_image
    docker rm -f $container_name
}

function run_tmp_image() {
    docker run --rm -it --entrypoint=bash $image_name:$image_tag
}

function run_last_saved_container() {
    docker run --rm -it --entrypoint=bash hioscar/debug_image
}

function clean() {
    docker container prune -f
    docker image prune -a -f
}

function help() {
    # Keeping the help text separately will allow for a much better experience when editing.
    cat docs/cli_help.txt
}

main $@
