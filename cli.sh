#! bash

declare image_name='hioscar'
declare image_tag='test'
declare container_name='hioscar'

function main() {
    case $1 in
        build)
            build_image;;
        run)
            run_image;;
        dev)
            run_disposable_image;;
        clean)
            clean;;
        *)
            help;;
    esac
}

function build_image() {
    echo "Built on: `date`" > LOG.txt
    docker build -t $image_name:$image_tag .
    rm LOG.txt
}

function _build_image_if_missing() {
    [[ $(docker image ls $image_name:$image_tag|wc -l) == 1 ]] && build_image
}

function run_image() {
    _build_image_if_missing

    [[ -f LOG.txt ]] && rm LOG.txt

    docker run --name $container_name $image_name:$image_tag
    docker cp $container_name:/app/LOG.txt .
    docker rm -f $container_name

    cat LOG.txt
    rm LOG.txt
}

function run_disposable_image() {
    docker run --rm -it $image_name:$image_tag
}

function clean() {
    docker image prune -a -f
}

function help() {
    cat docs/cli_help.txt
}

main $@
